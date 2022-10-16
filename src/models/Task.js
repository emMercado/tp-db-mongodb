import { Schema, model } from 'mongoose'

const taskSchema = new Schema({
    title: { type: String, required: false },
    description: { type: String, required: false },
    available: {type: Boolean, required: false},
    complete: {type: Boolean, required: false}
})

export default model("Task", taskSchema);