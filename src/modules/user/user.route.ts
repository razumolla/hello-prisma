import express from "express";
import { UserController } from "./user.controller";
const router = express.Router();

router.post("/create-user", UserController.insertIntoDB);
router.post("/profile", UserController.insertOrUpdateProfile);
router.get("/", UserController.getUsers);

export const UserRouter = router;
