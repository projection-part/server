import express from "express";
import connection from "./database/db.js";
import cors from 'cors';
import bodyParser from "body-parser";

import Routes from "./routes/routes.js";

const corsOptions = {
    origin: 'https://client-peach.vercel.app', // Replace with your client's domain
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // if your client needs to send cookies with the requests
  };

const app = express();

app.use(cors(corsOptions));
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));

app.use("/",Routes);

const PORT = 8000;

connection();

app.listen(PORT, ()=>console.log(`Your server is running successfully on ${PORT}`));