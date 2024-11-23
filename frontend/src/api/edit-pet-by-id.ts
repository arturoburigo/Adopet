import { api } from "../lib/axios";

export async function editPetById(id: string, updatedPetData: any) {
    const token = localStorage.getItem('token');

    if (!token) {
        throw new Error("No token found");
    }

    const formData = new FormData();
    formData.append('name', updatedPetData.name);
    formData.append('age', updatedPetData.age);
    formData.append('breed', updatedPetData.breed);
    formData.append('size', updatedPetData.size);
    formData.append('about', updatedPetData.about);
    formData.append('whatsapp', updatedPetData.whatsapp);
    formData.append('castrate', updatedPetData.castrate);
    formData.append('vacinated', updatedPetData.vacinated);
    formData.append('sex', updatedPetData.sex);

    const response = await api.put(`/pets/${id}`, formData, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
        }
    });
    console.log(response.data);
    return response.data;
}
