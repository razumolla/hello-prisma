import express from "express";
import { UserController } from "./user.controller";
const router = express.Router();

router.get("/", (req, res) => {
  res.send(" Hello Prisma ");
});

router.post("/create-user", UserController.InsertIntoDB);
export const UserRouter = router;
