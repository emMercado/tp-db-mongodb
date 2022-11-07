import express from "express";
import {
  getTasks,
  registerTask,
  deleteTask,
  getTaskById,
  updateTask,
} from "../controllers/taskController.js";

export const taskRoute = express.Router();

// GET /task
taskRoute.get("/", getTasks);
// GET /task/:id
taskRoute.get("/:id", getTaskById);
// POST /task
taskRoute.post("/registerTask", registerTask);
// PUT /task/:id
taskRoute.put("/:id", updateTask);
// DELETE /task/:id
taskRoute.delete("/:id", deleteTask);