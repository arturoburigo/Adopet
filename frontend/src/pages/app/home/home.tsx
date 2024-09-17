import { Header } from "../../../components/header/header";        
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../components/ui/button/button';
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

        return (
            <div>
            <Header/>
            <h1>Veja os pets disponíveis para adoção!</h1>
            <div>
                {pets.map((pet) => (
                <div key={pet.id} style={{ margin: '10px', border: '1px solid black', padding: '10px' }}>
                    <img src={pet.image} alt={pet.name} style={{ width: '200px', height: '200px', objectFit: 'cover' }}/>
                    <h3>{pet.name}</h3>
                    <Button text="Informações" onClick={() => handlePetClick(pet.id)}></Button>
                </div>
                ))}
            </div>
            </div>
        );
    };

    export default PetList;
//}