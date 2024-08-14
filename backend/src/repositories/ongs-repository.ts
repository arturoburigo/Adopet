import { Prisma, Ong } from "@prisma/client";

export interface OngsRepositoryInterface {
    create(data: Prisma.OngCreateInput): Promise<Ong>;
}