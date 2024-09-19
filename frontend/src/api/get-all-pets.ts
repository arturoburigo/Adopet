import { api } from '../lib/axios';


export async function getAllPets() {
    const response = await api.get('/pets');
    console.log(response.data);
    return response.data;
}