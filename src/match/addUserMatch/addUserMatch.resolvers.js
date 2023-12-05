import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const resolvers = {
  Mutation: {
    addUserMatch: async (_, { matchId, userId }) => {
      const match = await prisma.match.update({
        where: {
          id: matchId,
        },
        data: {
          users: {
            create: { userId },
          },
        },
      });
      if (match) {
        return {
          ok: true,
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
