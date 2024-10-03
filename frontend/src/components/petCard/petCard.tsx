import { Button } from '../ui/button/button';
import {
  CardContainer, GenderIcon, PetImage, PetInfo, PetName, ButtonContainer, ButtonEdit, ButtonDelete
} from './styles';

interface PetCardProps {
  img: string;
  isAdmin?: boolean; 
  petName: string;
  sex: 'F' | 'M';  // Ensure this matches your API's response
  onClickEdit: () => void;  // Function called when clicking Edit
  onClickDelete: () => void; // Function called when clicking Delete
}

export function PetCard({ img, isAdmin = true, petName, sex, onClickEdit, onClickDelete }: PetCardProps) {
  // Set icon and color based on sex
  const genderIcon = sex === 'M' ? '♂️' : '♀️';  // Male or female icon
  const genderColor = sex === 'M' ? 'blue' : 'pink';  // Color based on sex

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
          <Button text="Quero adotar" />      
        </ButtonContainer>
      )}
    </CardContainer>
  );
}
