import { prisma } from "../../lib/prisma";

const register = (payload: any) => {
  const user = prisma.user.create({
    data: { ...payload },
  });
  return user
};

export const userServices = {
  register,
};
