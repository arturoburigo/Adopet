import styled from "styled-components";
import { defaultTheme } from "../../styles/themes/default";

export const ContainerMain = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const BlurDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
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

export const ModalSection = styled.section`
  display: flex;
  flex-direction: row;

  width: 75%;
  height: 50em;

  background-color: ${defaultTheme["white"]};
  border-radius: 20px;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.4);

  z-index: 3;
`;

export const PetImage = styled.img`
  width: 60%;
  height: 100%;
  border-radius: 20px 00px 0px 20px;
`;

export const DetailsSection = styled.section`
  width: 100%;
  padding: 2%;
  font-size: 1.05em;
`;

export const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`