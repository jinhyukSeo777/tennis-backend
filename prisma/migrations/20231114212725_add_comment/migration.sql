/*
  Warnings:

  - You are about to drop the column `commentNum` on the `Feed` table. All the data in the column will be lost.
  - You are about to drop the column `likes` on the `Feed` table. All the data in the column will be lost.
  - You are about to drop the `Club` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "Feed" DROP COLUMN "commentNum",
DROP COLUMN "likes";

-- DropTable
DROP TABLE "Club";

-- CreateTable
CREATE TABLE "Comment" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,
    "feedId" INTEGER NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_feedId_fkey" FOREIGN KEY ("feedId") REFERENCES "Feed"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
