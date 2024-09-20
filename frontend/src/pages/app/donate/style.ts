import styled from "styled-components";
import { defaultTheme } from "../../../styles/themes/default";

export const ContainerMain = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   min-height: 90vh;
`;

export const ContainerDonate = styled.section`
  display: flex;
  align-items: center;
  
  width: 60%;
  height: 70vh;
  border: 2.5px solid ${defaultTheme["blue-300"]};
  border-radius: 20px;
  background-color: ${defaultTheme["blue-200"]};;
`

export const Image = styled.img`
  width: 50%;
  height: 100%;
  object-fit: cover;

  border-radius: 20px 0px 0px 20px;
  border-right: 2.5px solid  ${defaultTheme["blue-300"]};
`;

export const SectionPix = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3%;

  width: 50%;
  height: 100%;

  font-family: Helvetica, sans-serif;

  & h1 {
    font-size: 3.5em;
    letter-spacing: 2px;

    -webkit-text-stroke-width: 1.5px;
    -webkit-text-stroke-color: ${defaultTheme["blue-400"]};
    color: ${defaultTheme["white"]};
  }

  & p {
    text-align: justify;
    margin: 0 15% 0 15%;
    color: black;
    font-weight: bold;
    font-size: 1.05em;
  }

  & div {
    width: 400px;
    height: 400px;
    border: 1px solid black;
    color: black;
  }

  & section {
    width: 400px;
    height: 2px;
    background-color: #fff;
  }
`