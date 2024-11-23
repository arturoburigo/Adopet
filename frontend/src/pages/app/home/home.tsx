import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PetCard } from '../../../components/petCard/petCard';
import { Container, Title, HomeContainer } from './styles';
import { getAllPets } from '../../../api/get-all-pets';
import { PetAdoptionModal } from '../../../components/petAdoptionModal/petAdoptionModal';
import { Header } from '../../../components/header/header';

export type Pet = {
    id: number;
    name: string;
    petImg: string;
    sex: 'F' | 'M';
    age: string;
    size: string;
    about: string;
    castrate: boolean;
    vacinated: boolean;
    whatsapp: string;
};

const PetList: React.FC = () => {
    const navigate = useNavigate();
    const [pets, setPets] = useState<Pet[]>([]);
    const [selectedPet, setSelectedPet] = useState<Pet | null>(null); // State to manage the selected pet
    const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

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

    const handlePetClick = (petId: number) => {
        navigate(`/pet/${petId}`);
    };

    const handleAdoptClick = (pet: Pet) => {
        setSelectedPet(pet); // Set the selected pet
        setIsModalOpen(true); // Open the modal
    };

    const closeModal = () => {
        setIsModalOpen(false); // Close the modal
        setSelectedPet(null); // Clear the selected pet
    };

    return (
        <div>
            <Header />
            <HomeContainer>
                <Title>Veja os pets disponíveis para adoção!</Title>
                <Container>
                    {pets.map((pet) => (
                        <PetCard
                            key={pet.id}
                            img={`http://adopetapi-production.up.railway.app/files/${pet.petImg}`}
                            petName={pet.name}
                            isAdmin={false} // Assuming not admin in this case
                            sex={pet.sex}
                            onClick={() => handlePetClick(pet.id)}
                            onClickEdit={() => {}} // Placeholder for edit function if needed
                            onClickDelete={() => {}} // Placeholder for delete function if needed
                            onClickAdopt={() => handleAdoptClick(pet)} // Pass the adopt click handler
                        />
                    ))}
                </Container>
            </HomeContainer>

            {selectedPet && (
                <PetAdoptionModal
                    show={isModalOpen}
                    onClose={closeModal}
                    petName={selectedPet.name}
                    petImg={`http://adopetapi-production.up.railway.app/files/${selectedPet.petImg}`}
                    sex={selectedPet.sex}
                    petAge={selectedPet.age}          // Certifique-se de que está passando a idade corretamente
                    petSize={selectedPet.size}        // Certifique-se de que está passando o tamanho corretamente
                    petAbout={selectedPet.about}      // Certifique-se de que está passando a descrição corretamente
                    petCastrate={selectedPet.castrate} // Alterar para booleano, se necessário
                    petVacinated={selectedPet.vacinated} // Alterar para booleano, se necessário
                    petWhatsapp={selectedPet.whatsapp}
                />
            )}
        </div>
    );
};

export default PetList;
