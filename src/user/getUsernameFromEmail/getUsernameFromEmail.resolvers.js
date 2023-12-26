import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const resolvers = {
  Mutation: {
    getUsernameFromEmail: async (_, { email }) => {
      const user = await prisma.user.findUnique({
        where: { email },
      });
      if (user && user.socialLogin === false) {
        return {
          ok: true,
          username: user.username,
        };
      } else {
        return {
          ok: false,
          error: "이메일을 찾을 수 없습니다",
        };
      }
    },
  },
};

export default resolvers;
