import express from "express";
import { sendMessage, getMessages } from "../contollers/message.controllers.mjs";
import protectRoute from "../middleware/protectRoute.mjs";

const router = express.Router();

router.get("/:id",protectRoute, getMessages);
router.post("/send/:id", protectRoute,sendMessage);

export default router;
