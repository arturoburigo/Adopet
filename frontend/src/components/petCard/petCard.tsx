import { Button } from '../ui/button/button';
import {
  CardContainer, GenderIcon, PetImage, PetInfo, PetName, ButtonContainer, ButtonEdit, ButtonDelete
} from './styles';

interface PetCardProps {
  img: string;
  isAdmin?: boolean; 
  petName: string;
  sex: 'F' | 'M'; 
  onClickEdit: () => void; 
  onClickDelete: () => void;
  onClickAdopt: () => void; 
}

export function PetCard({ img, isAdmin = true, petName, sex, onClickEdit, onClickDelete, onClickAdopt }: PetCardProps) {

  const genderIcon = sex === 'M' ? '♂️' : '♀️'; 
  const genderColor = sex === 'M' ? '#0303fc' : '#fc03e7';


  return (
    <CardContainer>
      <PetImage src={img} alt="petImg" />
      <PetInfo>
        <PetName>{petName}</PetName>
        <GenderIcon color={genderColor}>{genderIcon}</GenderIcon> {/* Pass color */}
      </PetInfo>
      {isAdmin ? (
        <ButtonContainer>
          <ButtonEdit text="Editar" onClick={onClickEdit} /> 
          <ButtonDelete text="Excluir" onClick={onClickDelete} /> 
        </ButtonContainer>
      ) : (
        <ButtonContainer>
          <Button text="Saber mais" onClick={onClickAdopt} />  {/* Call onClickAdopt here */}
        </ButtonContainer>
      )}
    </CardContainer>
  );
}
