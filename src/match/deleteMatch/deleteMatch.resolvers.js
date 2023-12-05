import { PrismaClient } from "@prisma/client";
import { printSchema } from "graphql";

const prisma = new PrismaClient();

const resolvers = {
  Mutation: {
    deleteMatch: async (_, { id }) => {
      const match = await prisma.match.findUnique({
        where: { id },
        include: { users: true },
      });

      for (let i = 0; i < match.users.length; i++) {
        await prisma.userMatch.delete({
          where: {
            id: match.users[i].id,
          },
        });
      }

      const deleteMatch = await prisma.match.delete({
        where: { id },
      });

      if (deleteMatch) {
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
