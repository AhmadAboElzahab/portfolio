/*
  Warnings:

  - Added the required column `descreption` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "descreption" TEXT NOT NULL;
