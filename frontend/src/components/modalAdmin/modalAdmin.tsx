import { useState, useEffect } from 'react';
import { ModalContainer, ModalContent, CloseButton, Input, Checkbox, Label, TextArea, SaveButton, Select } from './styles';

export interface Pet {
    id?: string;  // ID é opcional para novo pet
    name: string;
    age: string;
    breed: string;
    size: string;
    about: string;
    whatsapp: string;
    castrate: boolean;
    vacinated: boolean;
    sex: 'M' | 'F';
    petImg?: string;
}

interface PetModalAdminProps {
    isOpen: boolean;
    onClose: () => void;
    petData: Pet | null;
    onSave: (pet: Pet, petImgFile?: File | null) => void;  // Adicionar o parâmetro da imagem
}

export const PetModalAdmin: React.FC<PetModalAdminProps> = ({ isOpen, onClose, petData, onSave }) => {
    const [pet, setPet] = useState<Pet>({
        name: '',
        age: '',
        breed: '',
        size: 'small',
        about: '',
        whatsapp: '',
        castrate: false,
        vacinated: false,
        sex: 'F',
    });

    useEffect(() => {
        if (petData) {
            setPet(petData); // Carregar os dados do pet para edição
        } else {
            // Se não houver petData, significa que é um novo pet
            setPet({
                name: '',
                age: '',
                breed: '',
                size: 'small',
                about: '',
                whatsapp: '',
                castrate: false,
                vacinated: false,
                sex: 'F',
            });
        }
    }, [petData]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setPet((prevPet) => ({ ...prevPet, [name]: value }));
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        setPet((prevPet) => ({ ...prevPet, [name]: checked }));
    };


    const handleSave = async () => {
        try {
            await onSave(pet); 
        } catch (error) {
            console.error('Error uploading pet:', error);
        }
    };
    

    if (!isOpen) return null;

    return (
        <ModalContainer>
            <ModalContent>
                <CloseButton onClick={onClose}>X</CloseButton>
                <h2>{petData ? 'Editar Informação do Pet' : 'Adicionar Novo Pet'}</h2>

                <Label>Nome:</Label>
                <Input type="text" name="name" value={pet.name} onChange={handleInputChange} />

                <Label>Idade:</Label>
                <Input type="text" name="age" value={pet.age} onChange={handleInputChange} />

                <Label>Raça:</Label>
                <Input type="text" name="breed" value={pet.breed} onChange={handleInputChange} />

                <Label>Porte:</Label>
                <Select name="size" value={pet.size} onChange={handleInputChange}>
                    <option value="small">Pequeno</option>
                    <option value="medium">Médio</option>
                    <option value="large">Grande</option>
                </Select>

                <Label>Sobre o pet:</Label>
                <TextArea name="about" value={pet.about} onChange={handleInputChange} />

                <Label>Whatsapp:</Label>
                <Input type="text" name="whatsapp" value={pet.whatsapp} onChange={handleInputChange} />

                <Label>
                    Castrado:
                    <Checkbox type="checkbox" name="castrate" checked={pet.castrate} onChange={handleCheckboxChange} />
                </Label>

                <Label>
                    Vacinado:
                    <Checkbox type="checkbox" name="vacinated" checked={pet.vacinated} onChange={handleCheckboxChange} />
                </Label>

                <Label>Sexo:</Label>
                <Select name="sex" value={pet.sex} onChange={handleInputChange}>
                    <option value="F">Feminino</option>
                    <option value="M">Masculino</option>
                </Select>

      

                <SaveButton onClick={handleSave}>{petData ? 'Salvar' : 'Criar Pet'}</SaveButton>
            </ModalContent>
        </ModalContainer>
    );
};
