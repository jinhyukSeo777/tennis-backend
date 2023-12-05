import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const resolvers = {
  Query: {
    seeMatches: (_, { id }) => {
      let matchs = [];
      for (let i = 0; i < id.length; i++) {
        const match = prisma.match.findUnique({
          where: { id: id[i] },
        });
        matchs.push(match);
      }
      return matchs;
    },
  },
};

export default resolvers;
