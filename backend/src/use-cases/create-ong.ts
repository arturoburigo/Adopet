import { Ong } from "@prisma/client";
import { OngsRepositoryInterface } from "../repositories/ongs-repository";

interface CreateOngUseCaseRequest {
    name: string;
    email: string;
    whatsapp: string;
    city: string;
    uf: string;
    address: string;
}

interface CreateOngUseCaseResponse{
    ong: Ong;
}

export class CreateOngUseCase {
    constructor(private ongsRepository: OngsRepositoryInterface) {}

    async execute({
        name,
        email,
        whatsapp,
        city,
        address,
        uf
    }: CreateOngUseCaseRequest): Promise<CreateOngUseCaseResponse> {
        const ong = await this.ongsRepository.create({
            name,
            email,
            whatsapp,
            address,
            city,
            uf
            
        })

        return {ong}

    }
}