import { Event } from "../components/modalEvent/modalEvent";
import { api } from "../lib/axios";

export async function createEvent(eventData: Event, eventImgFile?: File | null) {
    const token = localStorage.getItem('token');

    if (!token) {
        throw new Error("No token found");
    }

    const formData = new FormData();
    formData.append("title", eventData.title);
    formData.append("description", eventData.description);
    formData.append("date", eventData.date);

    if (eventImgFile) {
        formData.append("img", eventImgFile);
    } else {
        throw new Error("No image file selected");
    }

    console.log("Dados enviados para a API:", formData); // Adicionando log aqui

    const response = await api.post(`/event/`, formData, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
        }
    });

    console.log("Resposta da API:", response.data); // Adicionando log aqui

    return response.data;
}
