import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const resolvers = {
  Mutation: {
    createComment: async (_, { feedId, text }, { loggedInUser }) => {
      const comment = await prisma.comment.create({
        data: {
          text,
          feed: {
            connect: {
              id: feedId,
            },
          },
          user: {
            connect: {
              id: loggedInUser.id,
            },
          },
        },
      });
      if (comment) {
        return {
          ok: true,
        };
      } else {
        return {
          ok: false,
          error: "create fail",
        };
      }
    },
  },
};

export default resolvers;
