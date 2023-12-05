import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const resolvers = {
  Mutation: {
    searchFeed: async (_, { keyword }) => {
      return prisma.feed.findMany({
        where: {
          OR: [
            { title: { contains: keyword } },
            { user: { username: keyword } },
          ],
        },
        include: { user: true },
      });
    },
  },
};

export default resolvers;
