/*
  Warnings:

  - Added the required column `vacinated` to the `pets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `whatsapp` to the `pets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "pets" ADD COLUMN     "vacinated" BOOLEAN NOT NULL,
ADD COLUMN     "whatsapp" TEXT NOT NULL;
