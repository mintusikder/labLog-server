import { RequestHandler } from "express";
import { equipmentServices } from "./equipment.service";

const createEquipment: RequestHandler = async (req, res) => {
  try {
    const equipment = await equipmentServices.createEquipment(req.body);
    res.send({
      message: "Equipment Create Successful",
      data: equipment,
    });
  } catch (error) {
    console.error(error);
  }
};

const getEquipment: RequestHandler = async (req, res) => {
  try {
    const equipment = await equipmentServices.getAllEquipment();
    res.send({
      message: "Get all data",
      equipment,
    });
  } catch (error) {
    console.log(error);
  }
};

export const equipmentController = {
  createEquipment,
  getEquipment,
};
