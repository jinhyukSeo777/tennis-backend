import { PrismaClient } from "@prisma/client";
import { createWriteStream } from "fs";
import bcrypt from "bcrypt";
import { uploadToS3 } from "../../aws";
import { protectedResolver } from "../users.utils";

const prisma = new PrismaClient();

const resolvers = {
  Mutation: {
    editProfile: protectedResolver(
      async (
        _,
        { username, password, email, summary, avatar },
        { loggedInUser }
      ) => {
        let newPassword = null;
        if (password) {
          newPassword = await bcrypt.hash(password, 10);
        }

        const alreadyExists = await prisma.user.findMany({
          where: {
            OR: [{ username }, { email }],
          },
        });
        if (alreadyExists.length !== 0) {
          return {
            ok: false,
            error: "유저네임 혹은 이메일이 이미 존재합니다.",
          };
        }

        let avatarUrl = null;
        if (avatar) {
          // const filename = `${Date.now()}-${avatar.file.filename}`;
          // const readStream = avatar.file.createReadStream();
          // const writeStream = createWriteStream(
          //   process.cwd() + "/uploads/" + filename
          // );
          // readStream.pipe(writeStream);
          // avatarUrl = `http://localhost:4000/static/${filename}`;
          avatarUrl = await uploadToS3(avatar, "avatars");
        }

        const user = await prisma.user.update({
          where: { id: loggedInUser.id },
          data: {
            username,
            ...(newPassword && { password: newPassword }),
            email,
            summary,
            ...(avatarUrl && { avatar: avatarUrl }),
          },
        });
        if (user) {
          return {
            ok: true,
          };
        } else {
          return {
            ok: false,
            error: "update fail",
          };
        }
      }
    ),
  },
};

export default resolvers;
