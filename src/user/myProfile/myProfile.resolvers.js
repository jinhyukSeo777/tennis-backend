import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const resolvers = {
  Query: {
    myProfile: (_, {}, { loggedInUser }) => {
      return prisma.user.findUnique({
        where: { id: loggedInUser.id },
        include: { Match: true },
      });
    },
  },
};

export default resolvers;
