import { api } from '../lib/axios';

export async function getPetbyID(id: string) {
    const response = await api.get(`/pets/${id}`);
    return response.data;
}
