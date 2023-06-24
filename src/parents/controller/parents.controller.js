import {
  deleteParentsServicesById,
  getParentsServices,
  postParentsServices,
} from "../services/parents.services.js";

export const postParents = async (req, res) => {
  try {
    postParentsServices(req, res);
  } catch (err) {
    console.log(err);
  }
};

export const deleteParentsById = async (req, res) => {
  try {
    deleteParentsServicesById(req, res);
  } catch (err) {
    console.log(err);
  }
};

export const getParents = async (req, res) => {
  try {
    await getParentsServices(req, res);
  } catch (err) {
    console.log(err);
  }
};
