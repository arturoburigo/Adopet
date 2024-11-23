import { useState, useEffect } from 'react';
import { HeaderAdmin } from "../../../components/header_admin/headerAdmin";
import { PetCard } from "../../../components/petCard/petCard";
import { AdminHomeContainer, Button_div } from './styles';
import { getAllPets } from '../../../api/get-all-pets';
import { deletePetById } from '../../../api/delete-pet-by-id';
import { Pet, PetModalAdmin } from '../../../components/modalAdmin/modalAdmin';
import { Button } from '../../../components/ui/button/button';
import { createPet } from '../../../api/create-pet';
import { editPetById } from '../../../api/edit-pet-by-id';

export default function AdminHome() {
    const [pets, setPets] = useState<Pet[]>([]);
    const [selectedPet, setSelectedPet] = useState<Pet | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);

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

    async function handleDeletePet(id: string) {
        try {
            await deletePetById(id);
            setPets(prevPets => prevPets.filter(pet => pet.id !== id));
        } catch (error) {
            console.error("Erro ao deletar pet:", error);
        }
    }

    const handleOpenModal = (pet: Pet | null = null) => {
        setSelectedPet(pet);
        setIsEditMode(!!pet);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedPet(null);
    };

    // Modificado para aceitar a imagem
    const handleSavePet = async (updatedPet: Pet, petImgFile?: File | null) => {
        try {
            if (!updatedPet.id) {
                throw new Error('Pet ID is required for editing');
            }
            
            // Passa a imagem para a API
            const updatedPetData = await editPetById(updatedPet.id, updatedPet, petImgFile);
            
            // Atualiza o estado local com os dados retornados da API
            setPets(prevPets => 
                prevPets.map(pet => 
                    pet.id === updatedPet.id ? updatedPetData.pet : pet
                )
            );
            
            handleCloseModal();
        } catch (error) {
            console.error("Erro ao atualizar pet:", error);
        }
    };

    const handleCreatePet = async (newPet: Pet, petImgFile?: File | null) => {
        try {
            const createdPet = await createPet(newPet, petImgFile);
            setPets(prevPets => [...prevPets, createdPet]);
            handleCloseModal();
        } catch (error) {
            console.error("Erro ao criar pet:", error);
        }
    };

    return (
        <>
            <HeaderAdmin />
            <Button_div>
                <Button text='Adicionar pet' onClick={() => handleOpenModal(null)} />
            </Button_div>
            <AdminHomeContainer>
                {pets.map((pet) => (
                    <PetCard
                        sex={pet.sex}
                        key={pet.id}
                        img={`https://adopetapi-production.up.railway.app/files/${pet.petImg}`}
                        petName={pet.name}
                        isAdmin={true}
                        onClickEdit={() => handleOpenModal(pet)}
                        onClickDelete={() => pet.id && handleDeletePet(pet.id)}
                        onClick={function (): void {
                            throw new Error('Function not implemented.');
                        }}
                        onClickAdopt={function (): void {
                            throw new Error('Function not implemented.');
                        }}
                    />
                ))}
            </AdminHomeContainer>

            <PetModalAdmin
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                petData={selectedPet}
                onSave={isEditMode ? handleSavePet : handleCreatePet}
            />
        </>
    );
}