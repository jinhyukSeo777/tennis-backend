import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

const resolvers = {
  Mutation: {
    kakaoLogin: async (_, { username, email, avatar }) => {
      const isExist = await prisma.user.findUnique({
        where: { username },
      });
      if (isExist) {
        const token = jwt.sign({ id: isExist.id }, process.env.SECRET_KEY);
        return {
          ok: true,
          token,
        };
      }

      const user = await prisma.user.create({
        data: {
          username,
          email,
          avatar,
          socialLogin: true,
        },
      });

      const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY);
      if (user) {
        return {
          ok: true,
          token,
        };
      } else {
        return {
          ok: false,
          error: "create fail",
        };
      }
    },
  },
};

export default resolvers;
