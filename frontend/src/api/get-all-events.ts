import { api } from '../lib/axios';


export async function getAllEvents() {
    const response = await api.get('/event');
    console.log(response.data);
    return response.data;
}