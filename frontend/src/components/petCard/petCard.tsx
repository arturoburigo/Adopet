import { Button } from '../ui/button/button';
import {
  CardContainer, GenderIcon, PetImage, PetInfo, PetName, ButtonContainer, ButtonEdit, ButtonDelete
} from './styles';

interface PetCardProps {
  img: string;
  isAdmin?: boolean; 
  petName: string;
  onClick: () => void;
}

export function PetCard({ img, isAdmin = true, petName, onClick }: PetCardProps) {  // GenderIconValor padrão definido aqui
  return (
    <CardContainer>
      <PetImage src={img} alt="petImg" />
      <PetInfo>
        <PetName>{petName}</PetName>
        <GenderIcon>♂️</GenderIcon> {/* Ícone do gênero */}
      </PetInfo>
      {isAdmin ? (
        <ButtonContainer>
          <ButtonEdit text="Editar" />
          <ButtonDelete text="Excluir" onClick={() => { console.log("Excluir clicado!"); onClick && onClick(); }} />
        </ButtonContainer>
      ) : (
        <ButtonContainer>
          <Button text='Quero adotar' />      
        </ButtonContainer>
      )}
    </CardContainer>
  );
}
