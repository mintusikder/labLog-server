import { Router } from "express";
import { equipmentController } from "./equipment.controller";
import auth from "../../middleware/auth";

const equipmentRoute = Router();

equipmentRoute.post(
  "/",
  auth("equipment", "create"),
  equipmentController.createEquipment,
);

equipmentRoute.get(
  "/",
  auth("equipment", "read"),
  equipmentController.getEquipment,
);

export default equipmentRoute;
