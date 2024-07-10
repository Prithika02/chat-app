import express from "express";
import protectRoute from "../middleware/protectRoute.mjs";
import { getUsersForSidebar } from "../contollers/user.controllers.mjs";

const router = express.Router();

router.get("/", protectRoute, getUsersForSidebar);

export default router;
