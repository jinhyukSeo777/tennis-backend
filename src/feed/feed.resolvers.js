import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default {
  Feed: {
    commentNum: ({ id }) => prisma.comment.count({ where: { feedId: id } }),
    comments: ({ id }) =>
      prisma.comment.findMany({
        where: { feedId: id },
        include: { user: true },
      }),
  },
};
