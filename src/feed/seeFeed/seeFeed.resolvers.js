import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const resolvers = {
  Query: {
    seeFeed: async (_, { id }) => {
      const feed = await prisma.feed.findUnique({
        where: { id },
      });
      return prisma.feed.update({
        where: { id },
        data: { see: feed.see + 1 },
        include: { user: true },
      });
    },
  },
};

export default resolvers;
