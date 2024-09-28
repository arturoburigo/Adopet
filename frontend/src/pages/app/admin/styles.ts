import styled from "styled-components";


export const AdminHomeContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 colunas no desktop */
    gap: 30px 20px; /* 30px entre as linhas (vertical), 20px entre as colunas (horizontal) */
    padding: 20px 100px;
    width: 100%;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr); /* 2 colunas em tablets */
        gap: 25px 15px; /* Ajuste o espaçamento para tablets */
        padding: 20px 50px;
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr); /* 2 colunas em telas menores */
        gap: 20px 10px; /* Mais espaçamento vertical em telas menores */
        padding: 10px 20px;
    }

    @media (max-width: 480px) {
        grid-template-columns: repeat(2, 1fr); /* 2 colunas para celulares pequenos */
        gap: 20px 10px; /* Menor espaçamento no mobile */
        padding: 10px;
    }
`;
