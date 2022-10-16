import express from "express";
import {
    getTasks,
    registerTask,
    deleteTask,
    getTaskById,
    updateTask,
} from "../controllers/taskController.js";

export const taskRoute = express.Router();

// GET /Personas
taskRoute.get("/", (req, res) => getTasks(req, res));
// GET /Personas/:id
taskRoute.get("/:id", (req, res) => getTaskById(req, res));
// POST /Personas
taskRoute.post("/registerTask", (req, res) => registerTask(req, res));
// PUT /Personas/:id
taskRoute.put("/:id", (req, res) => updateTask(req, res));
// DELETE /Personas/:id
taskRoute.delete("/:id", (req, res) => deleteTask(req, res));