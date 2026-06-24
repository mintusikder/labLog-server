import { RequestHandler } from "express";
import { prisma } from "../../lib/prisma";

const register: RequestHandler = async (req, res) => {
  const payload = req.body;

  const user = await prisma.user.create({
    data: payload,
  });
  res.send({
    message: "User Register SuccessFull",
    data: user,
  });
};

export const userController = {
  register,
};
