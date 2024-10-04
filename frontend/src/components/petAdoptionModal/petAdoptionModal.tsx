import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import {
    ModalBackground, ModalContainer, ModalTitle, ModalImage, ModalContent,
    InfoItem, InfoLabel, GenderIcon, ModalFooter, CloseButton, WhatsappButton
} from './styles';

interface ModalProps {
    show: boolean;
    onClose: () => void;
    petName: string;
    petImg: string;
    sex: 'M' | 'F';
    petAge: string;
    petSize: string;
    petAbout: string;
    petCastrate: boolean; // Altere para booleano
    petVacinated: boolean; // Altere para booleano
    petWhatsapp: string;
}

export const PetAdoptionModal: React.FC<ModalProps> = ({
    show, onClose, petName, petImg, sex, petAbout, petAge, petCastrate, petSize, petVacinated, petWhatsapp
}) => {
    if (!show) return null;

    const genderIcon = sex === 'M' ? '♂️' : '♀️';
    const genderColor = sex === 'M' ? '#0303fc' : '#fc03e7';

    // Montar a mensagem e o link do WhatsApp
    const whatsappMessage = `Bom dia, tudo bem? Me interessei pelo(a) ${petName} e gostaria de adotá-lo(a)!`;
    const whatsappLink = `https://api.whatsapp.com/send/?phone=55${petWhatsapp}&text=${encodeURIComponent(whatsappMessage)}&type=phone_number&app_absent=0`;

    // Converter os valores booleanos para "Sim" ou "Não"
    const castrateText = petCastrate ? "Sim" : "Não";
    const vacinatedText = petVacinated ? "Sim" : "Não";

    // Função para traduzir o tamanho do pet
    const translateSize = (size: string) => {
        switch (size) {
            case 'small':
                return 'Pequeno';
            case 'medium':
                return 'Médio';
            case 'large':
                return 'Grande';
            default:
                return size; // Retorna o tamanho original caso não corresponda
        }
    };

    // Função para formatar a idade do pet
    const formatAge = (age: string) => {
        const ageValue = parseFloat(age);
        if (ageValue < 1) {
            return `${Math.round(ageValue * 12)} meses`; // Multiplica por 12 para converter para meses
        } else {
            return `${Math.round(ageValue)} anos`; // Arredonda para o número inteiro mais próximo
        }
    };

    return (
        <ModalBackground>
            <ModalContainer>
                <ModalTitle>Adote {petName}</ModalTitle>
                <ModalImage src={petImg} alt={`${petName} Image`} />
                <ModalContent>
                    <InfoItem><InfoLabel>Nome:</InfoLabel> {petName}</InfoItem>
                    <InfoItem>
                        <InfoLabel>Gênero:</InfoLabel>
                        <GenderIcon color={genderColor}>{genderIcon}</GenderIcon>
                    </InfoItem>
                    <InfoItem><InfoLabel>Idade:</InfoLabel> {formatAge(petAge)}</InfoItem> {/* Chama a função formatAge */}
                    <InfoItem><InfoLabel>Tamanho:</InfoLabel> {translateSize(petSize)}</InfoItem> {/* Chama a função translateSize */}
                    <InfoItem><InfoLabel>Castrado:</InfoLabel> {castrateText}</InfoItem>
                    <InfoItem><InfoLabel>Vacinado:</InfoLabel> {vacinatedText}</InfoItem>
                    <InfoItem><InfoLabel>Sobre:</InfoLabel> {petAbout}</InfoItem>
                </ModalContent>
                <ModalFooter>
                    <WhatsappButton href={whatsappLink} target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp size={20} />
                        Vou levar {petName} para casa!
                    </WhatsappButton>
                    <CloseButton onClick={onClose}>Fechar</CloseButton>
                </ModalFooter>
            </ModalContainer>
        </ModalBackground>
    );
};
