import express from "express";
import {
  deleteParentsById,
  getParents,
  postParents,
} from "../controller/parents.controller.js";

const router = express.Router();

router.route("/:id").delete(deleteParentsById);
router.route("/").post(postParents).get(getParents);

export default router;
