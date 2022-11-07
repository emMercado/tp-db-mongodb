import dotenv from 'dotenv';
dotenv.config();
import express from "express";
import './util/secrets.js'
import { personRoute } from './routes/personsRoutes.js'
import { taskRoute } from './routes/tasksRoutes.js'
import { kindRoute } from "./routes/kindRoutes.js";

const app = express();

app.use(express.json());
app.get("/", (req, res) => {
    res.json({ message: "Welcome to person application." });
});

//Routes
app.use("/person/", personRoute);
app.use("/task/", taskRoute);
app.use("/kind/", kindRoute);

//Welcome
app.get("/", (req, res) => {
    res.send("API Persons & kinds");
});

const PORT = process.env.PORT || 3001;
// API execution
app.listen(PORT, () => {
    try {
        console.log(`Server is running on port ${PORT}.`);
    } catch (error) {
        console.error("Fail server run", error);
    }
});