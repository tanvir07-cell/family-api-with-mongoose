import { Me } from "../model/me.js";
import { meServices } from "../services/me.services.js";

export const postMe = async (req, res) => {
  try {
    meServices(req, res);
  } catch (err) {
    console.log(err);
  }
};
