import { PrismaClient } from "@prisma/client";
import { protectedResolver } from "../users.utils";

const prisma = new PrismaClient();

const resolvers = {
  Query: {
    myProfile: protectedResolver((_, {}, { loggedInUser }) => {
      return prisma.user.findUnique({
        where: { id: loggedInUser.id },
        include: { Match: true },
      });
    }),
  },
};

export default resolvers;
