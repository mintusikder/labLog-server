import { Router } from "express";
import userRouter from "../modules/user/user.route";
import equipmentRoute from "../modules/equipment/equipment.route";
import logRoute from "../modules/usageLog/usageLog.routes";

const routes = Router();

routes.use("/user", userRouter);
routes.use("/equipment", equipmentRoute);
routes.use("/log", logRoute);

export default routes;
