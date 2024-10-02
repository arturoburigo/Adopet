import styled from "styled-components";
import { defaultTheme } from "../../styles/themes/default";

export const ContainerMain = styled.div`
  position: absolute;
  width: 100%;
  min-height: 100vh;
  height: auto;
  z-index: 1;
`;

export const BlurDiv = styled.div`
  position: absolute;
  width: 100%;
  min-height: 100vh;
  height: auto;
  backdrop-filter: blur(2.5px);
  z-index: 1;
`;

export const ContainerCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  position: relative;
  z-index: 2;
`;

export const Close = styled.section`
  position: absolute;
  right: 7em;
  margin: 0.5%;
  
  background-color: #cf5c5c;
  border-radius: 100%;
  color: ${defaultTheme.white};
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.7%;
  width: 20px;
  height: 20px;

  @media (max-width: 768px) {
    right: 1.4em;
    margin: 1%;
    width: 25px;
    height: 25px;
  }
  
  @media (max-width: 480px) {
    right: 1em;
    margin: 1%;
    width: 25px;
    height: 25px;
  }
`;

export const ModalSection = styled.section`
  display: flex;
  flex-direction: row;

  width: 90%;
  height: 55em;

  background-color: ${defaultTheme["white"]};
  border-radius: 20px;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.4);

  z-index: 3;

  @media (max-width: 768px) {
    width: 95%;
    height: 45em;
  }
  
  @media (max-width: 480px) {
    width: 95%;
    height: 45em;
  }
`;

export const PetImage = styled.img`
  width: 50%;
  height: 100%;
  border-radius: 20px 00px 0px 20px;

  @media (max-width: 480px) {
    display: none;
  }
`;

export const DetailsSection = styled.section`
  width: 100%;
  padding: 3% 2% 2% 2%;
  font-size: 1.05em;

  @media (max-width: 768px) {
    padding: 5% 2% 2% 2%;
    font-size: 0.9em;
  }

  @media (max-width: 480px) {
    padding: 12% 5% 5% 5%;
    font-size: 0.9em;
  }
`;

export const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  @media (max-width: 480px) {
    gap: 5px;
  }
`

export const StyledInput = styled.input`
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;
  transition: border 0.3s ease;
  outline: none;

  &:focus {
    border-color: #39b97b;
  }
`;

export const StyledTextArea = styled.textarea`
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;
  resize: none;
  height: 50px;
  transition: border 0.3s ease;
  outline: none;

  &:focus {
    border-color: #39b97b;
  }
`;