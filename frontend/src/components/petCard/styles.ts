import styled from 'styled-components';
import { Button } from '../ui/button/button';

// Estilizando o card do pet
export const CardContainer = styled.div`
  background-color: #fff;
  width: 100%;  /* Agora o card ocupará 100% da coluna disponível */
  max-width: 280px;  /* Limite de largura máximo para desktops */
  border-radius: 10px;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.15);

  @media (max-width: 768px) {
    max-width: 290px; /* Define o limite máximo para tablets */
  }

  @media (max-width: 480px) {
    max-width: 180px; /* Limite para telas muito pequenas */
  }
`;

export const PetImage = styled.img`
  width: 100%;
  min-height: 330px;
  border-radius: 10px;
  object-fit: cover;

  @media (max-width: 768px) {
    min-height: 290px;
  }

  @media (max-width: 480px) {
    min-height: 186px;
  }
`;

export const PetInfo = styled.div`
  padding: 10px;
  display: flex;
    justify-content: space-between;
`;

export const PetName = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin: 10px 0;
`;

export const GenderIcon = styled.span`
  font-size: 24px;
  color: blue;
  margin-left: 8px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  gap: 8px;
`;

export const ButtonEdit = styled(Button)`
  background-color: #BEA00D;
  width: 100%; /* Para ocupar todo o espaço disponível no container */
  max-width: 120px; /* Largura máxima no desktop */
  font-size: 16px; /* Tamanho do texto */

  @media (max-width: 768px) {
    max-width: 100px; /* Diminui a largura em telas menores */
    font-size: 14px; /* Diminui o tamanho do texto */
  }

  @media (max-width: 480px) {
    max-width: 80px; /* Largura ainda menor em telas pequenas */
    font-size: 16px; /* Tamanho de texto reduzido */
    padding: 20px 5px; /* Ajuste o padding conforme necessário */
  }
`;

export const ButtonDelete = styled(Button)`
  background-color: #BE0D0D;
  width: 100%; /* Para ocupar todo o espaço disponível no container */
  max-width: 120px; /* Largura máxima no desktop */
  font-size: 16px; /* Tamanho do texto */

  @media (max-width: 768px) {
    max-width: 100px; /* Diminui a largura em telas menores */
    font-size: 14px; /* Diminui o tamanho do texto */
  }

  @media (max-width: 480px) {
    max-width: 80px; /* Largura ainda menor em telas pequenas */
    font-size: 16px; /* Tamanho de texto reduzido */
    padding: 20px 5px; /* Ajuste o padding conforme necessário */
  }
`;
