import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

const resolvers = {
  Mutation: {
    createAccount: async (_, { username, password, email, summary }) => {
      const isExist = await prisma.user.findFirst({
        where: {
          OR: [{ username }, { email }],
        },
      });
      if (isExist) {
        return {
          ok: false,
          error: "유저이름 또는 이메일이 이미 존재합니다.",
        };
      }

      const newPassword = await bcrypt.hash(password, 10);

      // let avatarUrl = null;
      // if (avatar) {
      //   const filename = `${Date.now()}-${avatar.file.filename}`;
      //   const stream = avatar.file.createReadStream();
      //   const out = createWriteStream(process.cwd() + "/uploads/" + filename);
      //   stream.pipe(out);
      //   avatarUrl = `http://localhost:4000/static/${filename}`;
      // }

      const user = await prisma.user.create({
        data: {
          username,
          password: newPassword,
          email,
          socialLogin: false,
          summary,
          avatar:
            "https://tennis-upload.s3.ap-northeast-2.amazonaws.com/avatars/1700428898409-person.png",
        },
      });

      const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY);
      if (user) {
        return {
          ok: true,
          token,
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
