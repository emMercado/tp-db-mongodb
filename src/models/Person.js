import mongoose, { model } from "mongoose";

const personSchema = mongoose.Schema({
  name: { type: String, required: false },
  lastName: { type: String, required: false },
  dni: { type: String, required: false },
  birthDate: { type: Date, required: false },
  email: { type: String, required: false },
  cel: { type: String, required: false },
  tasks: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Task", required: false }
  ],
});

export default model("Person", personSchema);
