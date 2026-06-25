import { prisma } from "../../lib/prisma";

const createLog = (payload: any) => {
  const log = prisma.usageLog.create({
    data: { ...payload },
  });
  return log;
};
const getAllLog = () => {
  const log = prisma.usageLog.findMany({
    include: {
      user: true,
      equipment: true,
    },
  });
  return log;
};

export const logServices = {
  createLog,
  getAllLog,
};
