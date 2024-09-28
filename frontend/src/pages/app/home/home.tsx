import { Header } from "../../../components/header/header";        
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PetCard } from '../../../components/petCard/petCard';
import valter from '../../../../src/assets/valter.svg';
import calabresa from '../../../../src/assets/calabresa.svg';
import tigresa from '../../../../src/assets/tigresa.svg';


//export function Home(){
    type Pet = {
        id: number;
        name: string;
        image: string;
    };

    const pets: Pet[] = [
    { id: 1, name: 'Valter', image: valter},
    { id: 2, name: 'Calabresa', image: calabresa},
    { id: 3, name: 'Tigresa', image: tigresa},
    ];

    const PetList: React.FC = () => {
        const navigate = useNavigate();

        const handlePetClick = (petId: number) => {
            navigate(`/pet/${petId}`);
        };

        return ( // key={pet.id} 
            <div>
            <Header/>
            <h1 style={{ margin: '20px', padding: '10px', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>Veja os pets disponíveis para adoção!</h1>
                <div style={{ margin: '10px', padding: '20px', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                    {pets.map((pet) => (
                    <PetCard
                        key={pet.id}
                        img={pet.image}
                        petName={pet.name}
                        isAdmin={false}
                        onClick={() => handlePetClick(pet.id)}
                    />
                    ))}
                </div>
            </div>
        );
    };

    export default PetList;
//}