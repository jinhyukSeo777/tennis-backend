import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

const resolvers = {
  Mutation: {
    login: async (_, { username, password }) => {
      const user = await prisma.user.findUnique({
        where: { username },
      });
      if (!user) {
        return {
          ok: false,
          error: "아이디 또는 비밀번호를 잘못 입력했습니다.",
        };
      }

      const passwordCheck = await bcrypt.compare(password, user.password);
      if (!passwordCheck) {
        return {
          ok: false,
          error: "아이디 또는 비밀번호를 잘못 입력했습니다.",
        };
      }

      const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY);
      return {
        ok: true,
        token,
      };
    },
  },
};

export default resolvers;
