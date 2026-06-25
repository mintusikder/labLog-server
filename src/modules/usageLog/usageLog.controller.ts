import { RequestHandler } from "express";
import { prisma } from "../../lib/prisma";

const createLog: RequestHandler = async (req, res) => {
  try {
    const payload = req.body;
    const log = await prisma.usageLog.create({
      data: payload,
    });
    res.send({
      message: "create log successful",
      data: log,
    });
  } catch (error) {
    res.send({ message: "log error", error });
  }
};

const getLog: RequestHandler = async (req, res) => {
  try {
    const log = await prisma.usageLog.findMany({
      include: {
        user: true,
        equipment: true,
      },
    });
    res.send({
      message: "get all log",
      log,
    });
  } catch (error) {
    res.send({ message: "get error", error });
  }
};

export const logController = {
  createLog,
  getLog,
};
