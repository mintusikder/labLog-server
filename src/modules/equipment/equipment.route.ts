import { Router } from "express";
import { equipmentController } from "./equipment.controller";

const equipmentRoute = Router()

equipmentRoute.post("/", equipmentController.createEquipment)

export default equipmentRoute