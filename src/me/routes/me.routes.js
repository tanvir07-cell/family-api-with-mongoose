import express from "express";
import {
  deleteMe,
  deleteMeById,
  getAllMe,
  postMe,
  updateMe,
  updateOrCreateMe,
} from "../controller/me.controllers.js";
import { authenticate } from "../../user/middleware/authentication.js";
const router = express.Router();

router.route("/:id").put(updateOrCreateMe).patch(updateMe).delete(deleteMeById);
router.route("/").post(postMe).get(authenticate, getAllMe).delete(deleteMe);

export default router;
