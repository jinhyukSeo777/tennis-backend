import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const resolvers = {
  Query: {
    seeHotFeeds: async () => {
      return prisma.feed.findMany({
        take: 10,
        orderBy: {
          see: "desc",
        },
        include: { user: true },
      });
    },
  },
};

export default resolvers;
