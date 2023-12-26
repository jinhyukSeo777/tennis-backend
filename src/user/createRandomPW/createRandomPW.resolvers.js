import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

const resolvers = {
  Mutation: {
    createRandomPW: async (_, { username, email }) => {
      const isExist = await prisma.user.findUnique({
        where: {
          username,
          email,
        },
      });
      if (!isExist) {
        return {
          ok: false,
          error: "유저네임 혹은 이메일을 찾을 수 없습니다.",
        };
      }

      const randomString = Math.random().toString(36).slice(2);

      const newPassword = await bcrypt.hash(randomString, 10);

      const user = await prisma.user.update({
        where: { username, email },
        data: {
          password: newPassword,
        },
      });

      if (user) {
        return {
          ok: true,
          password: randomString,
        };
      } else {
        return {
          ok: false,
          error: "비밀번호 재설정 실패.",
        };
      }
    },
  },
};

export default resolvers;
