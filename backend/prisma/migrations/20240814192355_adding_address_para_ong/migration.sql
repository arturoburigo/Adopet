/*
  Warnings:

  - Added the required column `address` to the `Ong` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Ong" ADD COLUMN     "address" TEXT NOT NULL;
