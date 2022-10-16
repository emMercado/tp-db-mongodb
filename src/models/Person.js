import mongoose, { model } from 'mongoose'

const personSchema = mongoose.Schema({
    name: { type: String, required: false },
    lastName: { type: String, required: false },
    address: { type: String, required: false },
    email: { type: String, required: false },
    age: { type: String, required: false },
    height: { type: String, required: false },
    weight: { type: String, required: false },
    tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }]
})

export default model("Person", personSchema);