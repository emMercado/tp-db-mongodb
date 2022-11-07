import { Schema, model } from "mongoose";

const kindSchema = new Schema({
  name: { type: String, required: false },
});

export default model("Kind", kindSchema);