import styled from "styled-components";

export const ContainerMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 85vh;
`;

export const ContainerDonate = styled.section`
  display: flex;
  align-items: center;

  width: 60%;
  height: 80vh;
  border-radius: 20px;
  box-shadow: 10px 8px 10px rgba(0, 0, 0, 0.15);

  @media (max-width: 768px) {
    /* Define o limite máximo para tablets */
    width: 95%;
  }

  @media (max-width: 480px) {
    /* Limite para telas muito pequenas */
    width: 90%;
    box-shadow: 2px 8px 10px rgba(0, 0, 0, 0.25);
  }
`;

export const Image = styled.img`
  width: 50%;
  height: 100%;
  object-fit: cover;

  border-radius: 20px 0px 0px 20px;

  @media (max-width: 480px) {
    display: none; /* Limite para telas muito pequenas */
  }
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
    margin: 1%;
    font-size: 3em;
    font-weight: 400;
    letter-spacing: 2px;

    color: black;
  }

  & p {
    width: 350px;
    text-align: justify;
    margin: 0 15% 1% 15%;
    color: black;
    font-weight: bold;
    font-size: 1.05em;
  }

  & div {
    width: 350px;
    height: 350px;
    border: 1px solid black;
    color: black;
  }

  @media (max-width: 480px) {
    /* Limite para telas muito pequenas */
    width: 100%;

    & h1 {
      margin: 1.5%;
      font-size: 2em;
      font-weight: 400;
      letter-spacing: 2px;

      color: black;
    }

    & p {
      width: 250px;
      text-align: justify;
      margin: 0 15% 1% 15%;
      color: black;
      font-weight: bold;
      font-size: 1em;
    }

    & div {
      width: 250px;
      height: 250px;
      border: 1px solid black;
      color: black;
    }
  }

  @media (max-width: 768px) {
    /* Define o limite máximo para tablets */
    width: 100%;

    & h1 {
      margin: 1.5%;
      font-size: 2.5em;
      font-weight: 400;
      letter-spacing: 2px;

      color: black;
    }

    & p {
      width: 300px;
      text-align: justify;
      margin: 0 15% 1% 15%;
      color: black;
      font-weight: bold;
      font-size: 1em;
    }

    & div {
      width: 300px;
      height: 300px;
      border: 1px solid black;
      color: black;
    }
  }
`;
