import { Parents } from "../model/parents.js";

export const postParentsServices = async (req, res) => {
  try {
    const parents = await Parents.create({ ...req.body });
    return res.status(201).json({
      message: "Parents created successfully",
      parents: parents.toJSON(),
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: err.message });
  }
};

export const deleteParentsServicesById = async (req, res) => {
  try {
    const { id } = req.params;
    const parent = await Parents.findByIdAndDelete({ _id: id });
    if (!parent) {
      return res.status(400).json({ message: "No parent found with this id" });
    }
    return res.status(200).json({ message: "Parent deleted successfully" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: err.message });
  }
};

export const getParentsServices = async (req, res) => {
  try {
    const parents = await Parents.find({}).lean().exec();
    return res.status(200).json({
      message: "Parents found successfully",
      data: parents,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: err.message });
  }
};
