import { Me } from "../model/me.js";

export const meServices = async (req, res) => {
  try {
    const me = await Me.create({ ...req.body });
    return res.status(201).json({ me: me.toJSON() });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: err.message });
  }
};
