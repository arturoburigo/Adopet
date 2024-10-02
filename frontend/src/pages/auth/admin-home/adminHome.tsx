import { useEffect, useState } from 'react';
import { HeaderAdmin } from "../../../components/header_admin/headerAdmin";
import { PetCard } from "../../../components/petCard/petCard";
import { AdminHomeContainer } from './styles';
import { getAllPets } from '../../../api/get-all-pets'; // Importar a função de deletar pet
import { deletePetById } from '../../../api/delete-pet-by-id';

interface Pet {
    id: string;
    name: string;
    petImg: string;
}

export default function AdminHome() {
    const [pets, setPets] = useState<Pet[]>([]);

    useEffect(() => {
        async function fetchPets() {
            try {
                const data = await getAllPets();
                setPets(data.pets.pets);
            } catch (error) {
                console.error("Erro ao buscar pets:", error);
            }
        }

        fetchPets();
        
    }, []);

    // Função para deletar o pet
    async function handleDeletePet(id: string) {
        try {
            await deletePetById(id);
            setPets(prevPets => prevPets.filter(pet => pet.id !== id));
        } catch (error) {
            console.error("Erro ao deletar pet:", error);
        }
    }

    return (
        <>
            <HeaderAdmin />
            <AdminHomeContainer>
                {pets.map((pet) => (
                    <PetCard 
                        key={pet.id} 
                        img={`http://localhost:3333/files/${pet.petImg}`}
                        petName={pet.name}
                        isAdmin={true}
                        onClick={() => handleDeletePet(pet.id)}
                    />
                ))}
            </AdminHomeContainer>
        </>
    );
}
