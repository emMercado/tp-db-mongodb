import dotenv from 'dotenv';
dotenv.config();
import express from "express";
/* import dbConfig from './config/db.config'; */
import { dbUri, mongooseOptions } from './config/db.config';
/* 
const dbConfig = require("./config/db.config"); */

//ejemplo import route
/* import { movieRoute } from './routers/movie.routes.js'; */

const app = express();
/* const db = require("./app/models"); */

db.mongoose
    .connect(dbUri, mongooseOptions)
    .then(() => {
        console.log("Successfully connect to MongoDB.");
        initialFunction();
    })
    .catch(err => {
        console.error("Connection error", err);
        process.exit();
    });

app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Welcome to pilar application." });
});

//Routes
//A medida que vayamos creando las vamos desbloqueando
//app.use("/movie/", movieRoute);
//app.use("/user/", userRoute);
//app.use("/room/", roomRoute);

//Welcome
app.get("/", (req, res) => {
    res.send("API de personas");
});

const PORT = process.env.PORT || 3001;
// API execution
app.listen(PORT, /* async */() => {
    try {
        //await db.authenticate();
        console.log(`Server is running on port ${PORT}.`);
    } catch (error) {
        console.error("Fail server run", error);
    }
});