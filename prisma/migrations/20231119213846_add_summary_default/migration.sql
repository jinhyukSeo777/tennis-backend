/*
  Warnings:

  - Made the column `summary` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "summary" SET NOT NULL,
ALTER COLUMN "summary" SET DEFAULT '';
