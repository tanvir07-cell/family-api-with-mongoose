import { Me } from "../model/me.js";

export const mePostServices = async (req, res) => {
  try {
    const me = await Me.create({ ...req.body });
    return res
      .status(201)
      .json({ message: "Me created successfully", me: me.toJSON() });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: err.message });
  }
};

export const meGetAllServices = async (req, res) => {
  try {
    const me = await Me.find({}).populate("parents").lean().exec();
    return res.status(200).json({ data: me });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: err.message });
  }
};

export const meUpdateServices = async (req, res) => {
  try {
    const { id } = req.params;
    const me = await Me.findByIdAndUpdate(id, { ...req.body }, { new: true })
      .lean()
      .exec();
    if (!me) {
      return res.status(400).json({ message: "No me found with this id" });
    }
    return res
      .status(200)
      .json({ message: "Me updated successfully", updatedData: me });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: err.message });
  }
};

export const meUpdateOrCreateServices = async (req, res) => {
  try {
    const id = await Me.findOne({ ...req.params.id })
      .lean()
      .exec();
    if (!id) {
      const me = await Me.create({ ...req.body });
      return res.status(201).json({ message: "Me created successfully", me });
    } else {
      const me = await Me.findByIdAndUpdate(id);
      return res.status(200).json({ message: "Me updated successfully", me });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: err.message });
  }
};

export const meDeleteServices = async (req, res) => {
  try {
    await Me.deleteMany({});
    return res
      .status(200)
      .json({ message: "All me data deleted successfully" });
  } catch (err) {
    console.log(err);
  }
};

export const deleteMeByIdServices = async (req, res) => {
  try {
    const { id } = req.params;
    const getId = await Me.findOne({ _id: id }).lean().exec();
    if (!getId) {
      return res.status(400).json({ message: "No me found with this id" });
    } else {
      await Me.findByIdAndDelete({ _id: id });
      return res.status(200).json({ message: "Me deleted successfully" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: err.message });
  }
};
