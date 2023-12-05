import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const resolvers = {
  Query: {
    seeFeeds: async () => {
      return prisma.feed.findMany({
        orderBy: {
          createdAt: "desc",
        },
        include: { user: true },
      });
    },
  },
};

export default resolvers;
