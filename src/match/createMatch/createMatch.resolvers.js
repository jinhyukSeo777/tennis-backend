import { PrismaClient } from "@prisma/client";
import { protectedResolver } from "../../user/users.utils";

const prisma = new PrismaClient();

const resolvers = {
  Mutation: {
    createMatch: protectedResolver(
      async (
        _,
        {
          title,
          date,
          startTime,
          endTime,
          isSingle,
          isInside,
          summary,
          storeName,
          address,
          lat,
          lng,
          userId,
        }
      ) => {
        const match = await prisma.match.create({
          data: {
            title,
            date,
            startTime,
            endTime,
            isSingle,
            isInside,
            summary,
            storeName,
            address,
            lat,
            lng,
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
      }
    ),
  },
};

export default resolvers;
