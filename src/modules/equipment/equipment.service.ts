import { prisma } from "../../lib/prisma";

const createEquipment = (payload: any) => {
  const equipment = prisma.equipment.create({
    data: { ...payload },
  });
  return equipment;
};

const getAllEquipment = () =>{
    const equipment = prisma.equipment.findMany()
    return equipment
}

export const equipmentServices = {
  createEquipment,
  getAllEquipment
};
