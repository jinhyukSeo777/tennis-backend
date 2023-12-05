/*
  Warnings:

  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[username]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `username` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "name",
ADD COLUMN     "score" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "summary" TEXT,
ADD COLUMN     "totalLose" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "totalWin" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "username" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "UserMatch" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER,
    "MatchId" INTEGER NOT NULL,

    CONSTRAINT "UserMatch_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Match" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "month" INTEGER NOT NULL,
    "day" INTEGER NOT NULL,
    "startHour" INTEGER NOT NULL,
    "startMin" INTEGER NOT NULL,
    "endHour" INTEGER NOT NULL,
    "endMin" INTEGER NOT NULL,
    "isSingle" BOOLEAN NOT NULL,
    "isInside" BOOLEAN NOT NULL,
    "summary" TEXT,
    "storeName" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "lat" INTEGER NOT NULL,
    "lng" INTEGER NOT NULL,

    CONSTRAINT "Match_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Feed" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "commentNum" INTEGER NOT NULL,
    "likes" INTEGER NOT NULL,
    "see" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "text" TEXT NOT NULL,

    CONSTRAINT "Feed_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Club" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "howMany" INTEGER NOT NULL,
    "leader" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "Recruiting" BOOLEAN NOT NULL,

    CONSTRAINT "Club_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- AddForeignKey
ALTER TABLE "UserMatch" ADD CONSTRAINT "UserMatch_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserMatch" ADD CONSTRAINT "UserMatch_MatchId_fkey" FOREIGN KEY ("MatchId") REFERENCES "Match"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feed" ADD CONSTRAINT "Feed_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
