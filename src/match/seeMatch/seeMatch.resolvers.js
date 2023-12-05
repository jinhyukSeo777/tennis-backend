import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const resolvers = {
  Query: {
    seeMatch: (_, { id }) => {
      return prisma.match.findUnique({
        where: { id },
        include: { users: true },
      });
    },
  },
};

export default resolvers;
