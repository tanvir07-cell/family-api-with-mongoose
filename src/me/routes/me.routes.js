import express from "express";
import { postMe } from "../controller/me.controllers.js";
const router = express.Router();

router.route("/").post(postMe);

export default router;
