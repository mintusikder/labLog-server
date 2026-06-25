import { Router } from "express";
import { logController } from "./usageLog.controller";

const logRoute = Router();

logRoute.post("/", logController.createLog)
logRoute.get("/", logController.getLog)

export default logRoute;
