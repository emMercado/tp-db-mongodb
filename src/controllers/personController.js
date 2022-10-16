import Person from "../models/Person.js";

export const getPersons = async (req, res) => {
    try {
        const people = await Person.find({}).populate("tasks");

        return res.json({ status: res.status, data: people });
    } catch (error) {
        console.error(error);
    }
};

export const registerPerson = async (req, res) => {
    try {
        const { body } = req
        const newPerson = await Person.create(body);

        return res.json({ status: res.status, data: newPerson });
    } catch (error) {
        console.error(error);
    }
};

export const getPersonById = async (req, res) => {
    try {
        const { id: _id } = req.params
        const person = await Person.findOne({ _id }).populate("tasks");

        return res.json({ status: res.status, data: person });
    } catch (error) {
        console.error(error);
    }
};

export const updatePerson = async (req, res) => {
    try {
        const filter = { _id: req.params.id };
        const query = { $set: req.body }

        const person = await Person.updateOne(filter, query);

        return res.json({ status: res.status, data: person });
    } catch (error) {
        res.status(500).send("Error al modificar persona" + error)
        console.error(error);
    }
};

export const deletePerson = async (req, res) => {
    try {
        const { id: _id } = req.params
        await Person.deleteOne({ _id });

        return res.json({ status: res.status });
    } catch (error) {
        res.status(500).send("Error al eliminar persona" + error)
        console.error(error);
    }
};