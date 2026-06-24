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

export const equipmentController = {
  createEquipment,
};
