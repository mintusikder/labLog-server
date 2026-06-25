import { RequestHandler } from "express";
import { prisma } from "../../lib/prisma";
import { userServices } from "./user.service";

const register: RequestHandler = async (req, res) => {
  try {
    const user = await userServices.register(req.body);
    res.send({
      message: "User Register SuccessFull",
      data: user,
    });
  } catch (error) {
    console.log(error);
  }
};

export const userController = {
  register,
};
