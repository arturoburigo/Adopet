import { Pet } from "../components/modalAdmin/modalAdmin";
import { api } from "../lib/axios";

export async function createPet(petData: Pet, petImgFile?: File | null) {
    const token = localStorage.getItem('token');

    if (!token) {
        throw new Error("No token found");
    }

    const formData = new FormData();
    formData.append("name", petData.name);
    formData.append("age", petData.age);
    formData.append("breed", petData.breed);
    formData.append("size", petData.size);
    formData.append("about", petData.about);
    formData.append("whatsapp", petData.whatsapp);
    formData.append("castrate", String(petData.castrate));
    formData.append("vacinated", String(petData.vacinated));
    formData.append("sex", petData.sex);

    if (petImgFile) {
        formData.append("petImg", petImgFile);
    } else {
        throw new Error("No image file selected");
    }

    const response = await api.post(`/pets/`, formData, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
        }
    });

    return response.data;
}
