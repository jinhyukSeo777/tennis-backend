import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const resolvers = {
  Query: {
    hello: () => "hihihi",
  },
};

export default resolvers;
