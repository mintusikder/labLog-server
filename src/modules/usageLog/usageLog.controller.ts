import { RequestHandler } from "express";
import { logServices } from "./usageLog.service";

const createLog: RequestHandler = async (req, res) => {
  try {
    const log = await logServices.createLog(req.body);
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
    const log = await logServices.getAllLog();
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
