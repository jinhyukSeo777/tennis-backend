import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getUser = async (token) => {
  if (!token) {
    return null;
  }
  const { id } = await jwt.verify(token, process.env.SECRET_KEY);
  const user = await prisma.user.findUnique({ where: { id } });
  if (user) {
    return user;
  } else {
    return null;
  }
};
