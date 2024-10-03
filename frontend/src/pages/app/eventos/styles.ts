import styled from 'styled-components';


export const EventContainer = styled.div`
    display: grid;                      /* Usar grid para o layout */
    grid-template-columns: repeat(3, 1fr); /* 3 colunas */
    gap: 20px;                          /* Espaçamento entre os cards */
    padding: 20px;                      /* Adiciona espaço interno */
    max-width: 1200px;                  /* Largura máxima do container */
    margin: auto;                       /* Centraliza o container horizontalmente */

    @media (max-width: 768px) {         /* Para telas menores que 768px */
        grid-template-columns: repeat(2, 1fr); /* 2 colunas */
    }

    @media (max-width: 480px) {         /* Para telas menores que 480px */
        grid-template-columns: 1fr;     /* 1 coluna */
    }
`;


export const EventsCard = styled.div`
    background: white;      /* Cor de fundo branca */
    border-radius: 8px;     /* Bordas arredondadas */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Sombra suave */
    padding: 15px;          /* Espaço interno */
    display: flex;          /* Usar flexbox para o layout */
    flex-direction: column;  /* Alinha os elementos verticalmente */
    transition: box-shadow 0.3s; /* Transição suave para a sombra */
    
    &:hover {
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Sombra ao passar o mouse */
    }
`;
