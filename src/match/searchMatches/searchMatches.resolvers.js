import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const resolvers = {
  Query: {
    searchMatches: async (_, { id, date, isSingle, isInside, storeName }) => {
      const match = await prisma.match.findMany({
        where: {
          ...(id && { id }),
          ...(date && { date }),
          ...(isSingle && { isSingle }),
          ...(isInside && { isInside }),
          ...(storeName && { storeName }),
        },
        orderBy: {
          startTime: "asc",
        },
        include: { users: true },
      });
      for (let i = 0; i < match.length; i++) {
        const user = await prisma.user.findUnique({
          where: {
            id: match[i].users[0].userId,
          },
        });
        match[i].user = user;
      }
      return match;
    },
  },
};

export default resolvers;
