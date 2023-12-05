import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const resolvers = {
  Query: {
    seeRanking: () => {
      return prisma.user.findMany({
        orderBy: {
          score: "desc",
        },
        select: {
          id: true,
          username: true,
          totalWin: true,
          totalLose: true,
          score: true,
          avatar: true,
        },
      });
    },
  },
};

export default resolvers;
