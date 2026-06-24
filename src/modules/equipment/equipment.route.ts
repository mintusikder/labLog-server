import { Router } from "express";
import { equipmentController } from "./equipment.controller";

const equipmentRoute = Router();

equipmentRoute.post("/", equipmentController.createEquipment);
equipmentRoute.get("/", equipmentController.getEquipment);

export default equipmentRoute;
