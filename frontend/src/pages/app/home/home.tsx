import { Header } from "../../../components/header/header";
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PetCard } from '../../../components/petCard/petCard';
import { Container, Title, HomeContainer } from './styles'; 
import { getAllPets } from '../../../api/get-all-pets'; 

type Pet = {
    id: number;
    name: string;
    petImg: string; 
};

const PetList: React.FC = () => {
    const navigate = useNavigate();
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

    const handlePetClick = (petId: number) => {
        navigate(`/pet/${petId}`);
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
                            img={`http://localhost:3333/files/${pet.petImg}`}
                            petName={pet.name}
                            isAdmin={false}
                            onClick={() => handlePetClick(pet.id)}
                        />
                    ))}
                </Container>
            </HomeContainer>

        </div>
    );
};

export default PetList;
