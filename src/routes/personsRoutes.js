import express from "express";
import {
  getPersons,
  registerPerson,
  deletePerson,
  getPersonById,
  updatePerson,
  assignPersonToTask,
} from "../controllers/personController.js";

export const personRoute = express.Router();

// GET /person
personRoute.get("/", getPersons);
// GET /person/:id
personRoute.get("/:id", getPersonById);
// POST /person
personRoute.post("/registerPerson", registerPerson);
// PUT /person/:id
personRoute.put("/:id", updatePerson);
// DELETE /person/:id
personRoute.delete("/:id", deletePerson);
// PUT Assign person to task with dni
personRoute.put("/assign/:id", assignPersonToTask);
