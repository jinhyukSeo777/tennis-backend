import { PrismaClient } from "@prisma/client";
import { protectedResolver } from "../../user/users.utils";

const prisma = new PrismaClient();

const resolvers = {
  Mutation: {
    addUserMatch: protectedResolver(async (_, { matchId, userId }) => {
      const match = await prisma.match.update({
        where: {
          id: matchId,
        },
        data: {
          users: {
            create: { userId },
          },
        },
      });
      if (match) {
        return {
          ok: true,
        };
      } else {
        return {
          ok: false,
          error: "create fail",
        };
      }
    }),
  },
};

export default resolvers;
