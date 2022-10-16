import express from "express";
import {
    getPersons,
    registerPerson,
    deletePerson,
    getPersonById,
    updatePerson,
} from "../controllers/personController.js";

export const personRoute = express.Router();

// GET /person
personRoute.get("/", (req, res) => getPersons(req, res));
// GET /person/:id
personRoute.get("/:id", (req, res) => getPersonById(req, res));
// POST /person
personRoute.post("/registerPerson", (req, res) => registerPerson(req, res));
// PUT /person/:id
personRoute.put("/:id", (req, res) => updatePerson(req, res));
// DELETE /person/:id
personRoute.delete("/:id", (req, res) => deletePerson(req, res));