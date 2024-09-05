import mongoose, { mongo } from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const username = process.env.DB_USER;
const password = process.env.DB_PASSWORD;

const connection = ()=>{
    const MONGODB_URI = `mongodb+srv://${username}:${password}@todo.ty92e.mongodb.net/?retryWrites=true&w=majority&appName=Todo`;


    mongoose.connect(MONGODB_URI, {useNewUrlParser : true});

    mongoose.connection.on('connected', ()=>{
        console.log("Database connected successfully");
    });

    mongoose.connection.on('disconnected', ()=>{
        console.log("Database disconnected");
    });

    mongoose.connection.on('error', ()=>{
        console.log('Error while connecting the database', error.message);
    });


}

export default connection;