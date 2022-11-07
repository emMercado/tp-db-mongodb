import express from "express";
import {
  getKinds,
  registerKind,
  deleteKind,
  getKindById,
  updateKind,
} from "../controllers/kindController.js";

export const kindRoute = express.Router();

// GET /kind
kindRoute.get("/", getKinds);
// GET /kind/:id
kindRoute.get("/:id", getKindById);
// POST /kind
kindRoute.post("/registerKind", registerKind);
// PUT /kind/:id
kindRoute.put("/:id", updateKind);
// DELETE /kind/:id
kindRoute.delete("/:id", deleteKind);