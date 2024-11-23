import { useState, useEffect } from 'react';
import { HeaderAdmin } from "../../../components/header_admin/headerAdmin";
import { PetCard } from "../../../components/petCard/petCard";
import { AdminHomeContainer, Button_div } from './styles';
import { getAllPets } from '../../../api/get-all-pets';
import { deletePetById } from '../../../api/delete-pet-by-id';
import { Pet, PetModalAdmin } from '../../../components/modalAdmin/modalAdmin';
import { Button } from '../../../components/ui/button/button';
import { createPet } from '../../../api/create-pet';

export default function AdminHome() {
    const [pets, setPets] = useState<Pet[]>([]);
    const [selectedPet, setSelectedPet] = useState<Pet | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false); // Estado para saber se é edição ou criação

    // Carregar pets quando o componente é montado
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

    // Função para abrir o modal com o pet selecionado
    const handleOpenModal = (pet: Pet | null = null) => {
        setSelectedPet(pet);
        setIsEditMode(!!pet); // Se tiver um pet, é edição, senão é criação
        setIsModalOpen(true); // Abre o modal
    };

    // Função para fechar o modal
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedPet(null); // Limpa a seleção do pet ao fechar
    };

    // Função para salvar as alterações do pet
    const handleSavePet = (updatedPet: Pet) => {
        setPets(prevPets => prevPets.map(pet => pet.id === updatedPet.id ? updatedPet : pet));
        handleCloseModal(); // Fecha o modal após salvar
    };

    // Função para criar um novo pet
    const handleCreatePet = async (newPet: Pet, petImgFile?: File | null) => {
        try {
            const createdPet = await createPet(newPet, petImgFile); // Pass the image file here
            setPets(prevPets => [...prevPets, createdPet]);
            handleCloseModal(); // Close modal after creating
        } catch (error) {
            console.error("Erro ao criar pet:", error);
        }
    };




    return (
        <>
            <HeaderAdmin />
            <Button_div>
                <Button text='Adicionar pet' onClick={() => handleOpenModal(null)} /> {/* Modal para criação */}

            </Button_div>
            <AdminHomeContainer>
                {pets.map((pet) => (
                    <PetCard
                        sex={pet.sex}
                        key={pet.id}
                        img={`http://adopetapi-production.up.railway.app/files/${pet.petImg}`}
                        petName={pet.name}
                        isAdmin={true}
                        onClickEdit={() => handleOpenModal(pet)} // Abertura do modal no botão Editar
                        onClickDelete={() => pet.id && handleDeletePet(pet.id)} // Excluir pet
                        onClick={function (): void {
                            throw new Error('Function not implemented.');
                        } } onClickAdopt={function (): void {
                            throw new Error('Function not implemented.');
                        } }                    />
                ))}
            </AdminHomeContainer>

            <PetModalAdmin
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                petData={selectedPet} // Pass the selected pet here
                onSave={isEditMode ? handleSavePet : handleCreatePet} // Keep this as is
            />
        </>
    );
}
