/*
  Warnings:

  - You are about to drop the column `authorid` on the `posts` table. All the data in the column will be lost.
  - Added the required column `authorId` to the `posts` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "posts" DROP CONSTRAINT "posts_authorid_fkey";

-- AlterTable
ALTER TABLE "posts" DROP COLUMN "authorid",
ADD COLUMN     "authorId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "posts" ADD CONSTRAINT "posts_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
