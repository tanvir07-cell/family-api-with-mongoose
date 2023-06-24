import {
  deleteMeByIdServices,
  meDeleteServices,
  meGetAllServices,
  mePostServices,
  meUpdateOrCreateServices,
  meUpdateServices,
} from "../services/me.services.js";

export const postMe = async (req, res) => {
  try {
    await mePostServices(req, res);
  } catch (err) {
    console.log(err);
  }
};

export const getAllMe = async (req, res) => {
  try {
    await meGetAllServices(req, res);
  } catch (err) {
    console.log(err);
  }
};

export const updateMe = async (req, res) => {
  try {
    await meUpdateServices(req, res);
  } catch (err) {
    console.log(err);
  }
};

export const deleteMe = async (req, res) => {
  try {
    await meDeleteServices(req, res);
  } catch (err) {
    console.log(err);
  }
};

export const updateOrCreateMe = async (req, res) => {
  try {
    await meUpdateOrCreateServices(req, res);
  } catch (err) {
    console.log(err);
  }
};

export const deleteMeById = async (req, res) => {
  try {
    await deleteMeByIdServices(req, res);
  } catch (err) {
    console.log(err);
  }
};
