-- CreateEnum
CREATE TYPE "PetSize" AS ENUM ('SMALL', 'MEDIUM', 'LARGE');

-- CreateTable
CREATE TABLE "Ong" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "whatsapp" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "uf" CHAR(2) NOT NULL,

    CONSTRAINT "Ong_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pet" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "age" TEXT NOT NULL,
    "specie" TEXT NOT NULL,
    "breed" TEXT NOT NULL,
    "size" "PetSize" NOT NULL,
    "about" TEXT NOT NULL,
    "microchip" BOOLEAN NOT NULL,
    "ongName" TEXT NOT NULL,
    "ongId" TEXT NOT NULL,

    CONSTRAINT "Pet_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Ong_id_name_key" ON "Ong"("id", "name");

-- AddForeignKey
ALTER TABLE "Pet" ADD CONSTRAINT "Pet_ongId_ongName_fkey" FOREIGN KEY ("ongId", "ongName") REFERENCES "Ong"("id", "name") ON DELETE RESTRICT ON UPDATE CASCADE;
