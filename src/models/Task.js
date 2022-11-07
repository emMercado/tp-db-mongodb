import mongoose, { Schema, model } from "mongoose";

const taskSchema = new Schema({
  description: { type: String, required: false },
  dateClosing: { type: Date, required: false },
  dateStarted: { type: Date, required: false },
  kind: { type: mongoose.Schema.Types.ObjectId, ref: "Kind" },
  dniPerson: { type: String,  required: false},
});

export default model("Task", taskSchema);