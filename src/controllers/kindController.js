import Kind from "../models/Kind.js";

export const getKinds = async (req, res) => {
  try {
    const people = await Kind.find({});

    return res.json({ status: res.status, data: people });
  } catch (error) {
    console.error(error);
  }
};

export const registerKind = async (req, res) => {
  try {
    const { body } = req;
    const newKind = await Kind.create(body);

    return res.json({ status: res.status, data: newKind });
  } catch (error) {
    console.error(error);
  }
};

export const getKindById = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const kind = await Kind.findOne({ _id });

    return res.json({ status: res.status, data: kind });
  } catch (error) {
    console.error(error);
  }
};

export const updateKind = async (req, res) => {
  try {
    const filter = { _id: req.params.id };
    const query = { $set: req.body };

    const kind = await Kind.updateOne(filter, query);

    return res.json({ status: res.status, data: kind });
  } catch (error) {
    res.status(500).send("Error al modificar tipo" + error);
    console.error(error);
  }
};

export const deleteKind = async (req, res) => {
  try {
    const { id: _id } = req.params;
    await Kind.deleteOne({ _id });

    return res.json({ status: res.status });
  } catch (error) {
    res.status(500).send("Error al eliminar tipo" + error);
    console.error(error);
  }
};
