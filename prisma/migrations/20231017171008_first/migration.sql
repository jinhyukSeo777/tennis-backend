/*
  Warnings:

  - You are about to drop the column `MatchId` on the `UserMatch` table. All the data in the column will be lost.
  - Added the required column `matchId` to the `UserMatch` table without a default value. This is not possible if the table is not empty.
  - Made the column `userId` on table `UserMatch` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "UserMatch" DROP CONSTRAINT "UserMatch_MatchId_fkey";

-- DropForeignKey
ALTER TABLE "UserMatch" DROP CONSTRAINT "UserMatch_userId_fkey";

-- AlterTable
ALTER TABLE "UserMatch" DROP COLUMN "MatchId",
ADD COLUMN     "matchId" INTEGER NOT NULL,
ALTER COLUMN "userId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "UserMatch" ADD CONSTRAINT "UserMatch_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserMatch" ADD CONSTRAINT "UserMatch_matchId_fkey" FOREIGN KEY ("matchId") REFERENCES "Match"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
