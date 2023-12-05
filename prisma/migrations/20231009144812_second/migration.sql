/*
  Warnings:

  - You are about to drop the column `name` on the `Club` table. All the data in the column will be lost.
  - You are about to drop the column `day` on the `Match` table. All the data in the column will be lost.
  - You are about to drop the column `endHour` on the `Match` table. All the data in the column will be lost.
  - You are about to drop the column `endMin` on the `Match` table. All the data in the column will be lost.
  - You are about to drop the column `month` on the `Match` table. All the data in the column will be lost.
  - You are about to drop the column `startHour` on the `Match` table. All the data in the column will be lost.
  - You are about to drop the column `startMin` on the `Match` table. All the data in the column will be lost.
  - You are about to drop the column `year` on the `Match` table. All the data in the column will be lost.
  - Added the required column `title` to the `Club` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date` to the `Match` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endTime` to the `Match` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startTime` to the `Match` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Club" DROP COLUMN "name",
ADD COLUMN     "title" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Match" DROP COLUMN "day",
DROP COLUMN "endHour",
DROP COLUMN "endMin",
DROP COLUMN "month",
DROP COLUMN "startHour",
DROP COLUMN "startMin",
DROP COLUMN "year",
ADD COLUMN     "date" TEXT NOT NULL,
ADD COLUMN     "endTime" TEXT NOT NULL,
ADD COLUMN     "startTime" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "password" TEXT NOT NULL;
