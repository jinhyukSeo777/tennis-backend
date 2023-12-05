import AWS from "aws-sdk";

AWS.config.update({
  credentials: {
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
  },
});

export const uploadToS3 = async (avatar, folderName) => {
  const { filename, createReadStream } = await avatar.file;
  const readStream = createReadStream();
  const newFileName = `${folderName}/${Date.now()}-${filename}`;
  const { Location } = await new AWS.S3()
    .upload({
      Bucket: "tennis-upload",
      Key: newFileName,
      ACL: "public-read",
      Body: readStream,
    })
    .promise();
  return Location;
};
