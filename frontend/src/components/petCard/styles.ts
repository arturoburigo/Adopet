import styled from 'styled-components';
import { Button } from '../ui/button/button';

// Estilizando o card do pet
export const CardContainer = styled.div`
  background-color: #fff;
  width: 334px;
  border-radius: 10px;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.15);

  @media (max-width: 768px) {
    width: 290px;
  }

  @media (max-width: 480px) {
    width: 186px;
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
  background-color: #BEA00D;`;

export const ButtonDelete = styled(Button)`
  background-color: #BE0D0D;`;