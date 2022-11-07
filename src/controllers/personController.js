import Person from "../models/Person.js";
import Task from "../models/Task.js";

export const getPersons = async (req, res) => {
  try {
    const people = await Person.find({}).populate({
      path: "tasks",
      populate: {
        path: "kind",
        model: "Kind",
      },
    });

    return res.json({ status: res.status, data: people });
  } catch (error) {
    console.error(error);
  }
};

export const registerPerson = async (req, res) => {
  try {
    const { body } = req;

    const newPerson = await Person.create(body);

    return res.json({ status: res.status, data: newPerson });
  } catch (error) {
    console.error(error);
  }
};

export const getPersonById = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const person = await Person.findOne({ _id }).populate({
      path: "tasks",
      populate: {
        path: "kind",
        model: "Kind",
      },
    });

    return res.json({ status: res.status, data: person });
  } catch (error) {
    console.error(error);
  }
};

export const updatePerson = async (req, res) => {
  try {
    const filter = { _id: req.params.id };
    const query = { $set: req.body };

    const person = await Person.updateOne(filter, query);

    return res.json({ status: res.status, data: person });
  } catch (error) {
    res.status(500).send("Error al modificar persona" + error);
    console.error(error);
  }
};

export const deletePerson = async (req, res) => {
  try {
    const { id: _id } = req.params;

    const person = await Person.findOne({ _id });

    if (person.tasks.length)
      throw new Error("No se puede eliminar una persona con tramites");

    await Person.deleteOne({ _id });

    return res.json({ status: res.status });
  } catch (error) {
    res.status(500).send("Error al eliminar persona" + error);
    console.error(error);
  }
};

export const assignPersonToTask = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const { idTask } = req.body;

    const { dni } = await Person.findOne({ _id });
    const task = await Task.findOne({ _id: idTask });

    if (task.dniPerson === dni)
      throw new Error("La persona ya tiene asignada la tarea");
    if (task.dniPerson)
      throw new Error("Error, el tramite ya esta asignado");

    const assignTask = await Person.updateOne(
      { _id },
      { $push: { tasks: { $each: [idTask] } } }
    );

    const assignDniPersonToTask = await Task.updateOne(
      { _id: idTask },
      { $set: { dniPerson: dni } }
    );

    return res.json({
      status: res.status,
      data: assignTask,
      task: assignDniPersonToTask,
    });
  } catch (error) {
    res.status(500).send("Error al modificar persona" + error);
    console.error(error);
  }
};
