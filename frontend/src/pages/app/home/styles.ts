import styled from 'styled-components';

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 colunas no desktop */
    gap: 50px 10px; /* 50px entre as linhas (vertical), 10px entre as colunas (horizontal) */
    width: 100%;
    max-width: 1200px; /* Limita a largura total do container */
    margin: 0 auto; /* Centraliza o container na página */
    align-items: center; /* Centraliza verticalmente os itens no grid */
    justify-items: center; /* Centraliza horizontalmente os itens no grid */

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

export const Title = styled.h1`
    margin: 20px;
    padding: 10px;
    display: flex;
    justify-content: center; /* Centraliza o título */
    flex-wrap: wrap;
`;
