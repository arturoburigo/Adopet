import styled from "styled-components";

export const EventContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 80px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  height: 100vh;  /* Ajuste a altura para que o container ocupe a altura total da tela */
  place-items: center;  /* Centraliza os itens no eixo Y e X */

  @media (max-width: 768px) {
    gap: 40px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    gap: 50px;
    grid-template-columns: 1fr;
    padding: 0;
  }
`;
