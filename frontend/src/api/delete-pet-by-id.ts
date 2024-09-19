import { api } from '../lib/axios';

export async function deletePetById(id: string) {
    const response = await api.delete(`/pets/${id}`);
    return response.data;
}
