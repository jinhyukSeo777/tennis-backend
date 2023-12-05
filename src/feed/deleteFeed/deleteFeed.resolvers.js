import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const resolvers = {
  Mutation: {
    deleteFeed: async (_, { id }) => {
      const feed = await prisma.feed.findUnique({
        where: { id },
        include: { Comment: true },
      });

      for (let i = 0; i < feed.Comment.length; i++) {
        await prisma.comment.delete({
          where: {
            id: feed.Comment[i].id,
          },
        });
      }

      const deleteFeed = await prisma.feed.delete({
        where: { id },
      });

      if (deleteFeed) {
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
