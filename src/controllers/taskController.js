import Task from "../models/Task.js";

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({}).populate("kind");

    return res.json({ status: res.status, data: tasks });
  } catch (error) {
    console.error(error);
  }
};

export const registerTask = async (req, res) => {
  try {
    const { body } = req;
    const newTask = await Task.create(body);

    return res.json({ status: res.status, data: newTask });
  } catch (error) {
    console.error(error);
  }
};

export const getTaskById = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const task = await Task.findOne({ _id });

    return res.json({ status: res.status, data: task });
  } catch (error) {
    console.error(error);
  }
};

export const updateTask = async (req, res) => {
  try {
    const filter = { _id: req.params.id };
    const query = { $set: req.body };

    const task = await Task.updateOne(filter, query);

    return res.json({ status: res.status, data: task });
  } catch (error) {
    res.status(500).send("Error al modificar persona" + error);
    console.error(error);
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id: _id } = req.params;

    const { dniPerson } = await Task.findOne({ _id });

    if (dniPerson)
      throw new Error("Error el tramite esta asignado a una persona");

    const deletedTask = await Task.deleteOne({ _id });

    return res.json({ status: res.status, data: deletedTask });
  } catch (error) {
    res.status(500).send("Error al eliminar persona" + error);
    console.error(error);
  }
};