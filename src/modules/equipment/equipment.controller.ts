import { RequestHandler } from "express";
import { prisma } from "../../lib/prisma";

const createEquipment: RequestHandler = async (req, res) => {
  try {
    const payload = req.body;
    const equipment = await prisma.equipment.create({
      data: payload,
    });
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
    const equipment = await prisma.equipment.findMany();
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
