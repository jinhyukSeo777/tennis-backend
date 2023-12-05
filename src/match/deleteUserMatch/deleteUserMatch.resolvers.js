import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const resolvers = {
  Mutation: {
    deleteUserMatch: async (_, { matchId, userId }) => {
      const userMatch = await prisma.userMatch.findFirst({
        where: {
          userId,
          matchId,
        },
      });
      const result = await prisma.userMatch.delete({
        where: {
          id: userMatch.id,
        },
      });

      if (result) {
        return {
          ok: true,
        };
      } else {
        return {
          ok: false,
          error: "delete fail",
        };
      }
    },
  },
};

export default resolvers;
