import express from "express";
import connection from "./database/db.js";
import cors from 'cors';
import bodyParser from "body-parser";

import Routes from "./routes/routes.js";


const app = express();

app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));

app.use("/",Routes);

const PORT = 8000;

connection();

app.listen(PORT, ()=>console.log(`Your server is running successfully on ${PORT}`));