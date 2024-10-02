import { api } from '../lib/axios';

export async function deleteEventById(id: string) {
    const response = await api.delete(`/event/${id}`);
    return response.data;
}
