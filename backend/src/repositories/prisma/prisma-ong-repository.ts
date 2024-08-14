import { Prisma } from "@prisma/client";
import { OngsRepositoryInterface } from "../ongs-repository";
import { prisma } from "../../lib/prisma";

export class PrismaOngRepository implements OngsRepositoryInterface {
    async create(data: Prisma.OngCreateInput) {
        const ong = await prisma.ong.create({data})
        return ong;
    }
}