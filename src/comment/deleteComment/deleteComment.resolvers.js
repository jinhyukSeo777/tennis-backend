import { PrismaClient } from "@prisma/client";
import { protectedResolver } from "../../user/users.utils";

const prisma = new PrismaClient();

const resolvers = {
  Mutation: {
    deleteComment: protectedResolver(async (_, { id }) => {
      const verify = await prisma.comment.findUnique({
        where: { id },
      });
      if (!verify) {
        return {
          ok: false,
          error: "delete fail",
        };
      }
      const comment = await prisma.comment.delete({
        where: {
          id,
        },
      });
      return {
        ok: true,
      };
    }),
  },
};

export default resolvers;
