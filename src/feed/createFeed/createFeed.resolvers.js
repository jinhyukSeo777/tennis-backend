import { PrismaClient } from "@prisma/client";
import { uploadToS3 } from "../../aws";
import { protectedResolver } from "../../user/users.utils";

const prisma = new PrismaClient();

const resolvers = {
  Mutation: {
    createFeed: protectedResolver(
      async (_, { title, text, avatar }, { loggedInUser }) => {
        let avatarUrl = null;
        if (avatar) {
          avatarUrl = await uploadToS3(avatar, "pictures");
        }

        const feed = await prisma.feed.create({
          data: {
            title,
            text,
            ...(avatarUrl && { avatar: avatarUrl }),
            user: {
              connect: {
                id: loggedInUser.id,
              },
            },
          },
        });
        if (feed) {
          return {
            ok: true,
          };
        } else {
          return {
            ok: false,
            error: "feed error",
          };
        }
      }
    ),
  },
};

export default resolvers;
