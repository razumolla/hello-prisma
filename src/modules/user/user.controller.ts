import { Request, Response } from "express";
import { UserService } from "./user.service";

const InsertIntoDB = async (req: Request, res: Response) => {
  try {
    const result = await UserService.insertIntoDB(req.body);
    res.send({
      succes: true,
      message: "User create successfully",
      data: result,
    });
  } catch (error) {}
};

export const UserController = {
  InsertIntoDB,
};
