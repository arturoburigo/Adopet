/*
  Warnings:

  - Added the required column `petImg` to the `Pet` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pet" ADD COLUMN     "petImg" TEXT NOT NULL;
