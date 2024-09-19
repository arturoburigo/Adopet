import styled from "styled-components";


export const AdminHomeContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 colunas */
    gap: 20px; /* Espaçamento horizontal */
    padding: 20px 100px;
    width: 100%;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr); /* 2 colunas em tablets */
        padding: 20px 50px;
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr; /* 1 coluna em celulares */
        padding: 20px 20px;
    }
`;
