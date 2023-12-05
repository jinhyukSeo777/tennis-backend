import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const resolvers = {
  Query: {
    seeProfiles: (_, { id }) => {
      let users = [];
      for (let i = 0; i < id.length; i++) {
        const user = prisma.user.findUnique({
          where: { id: id[i] },
        });
        users.push(user);
      }
      return users;
    },
  },
};

export default resolvers;
