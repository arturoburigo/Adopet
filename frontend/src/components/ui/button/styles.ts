import styled from "styled-components";

export const ButtonContainer = styled.button`
    display: flex;
    width: 320px;
    border-radius: 6px;
    border: 0;
    background: ${props => props.theme["blue-500"]};
    padding: 1rem;
    color: ${props => props.theme.white};   
    font-weight: bold;
    align-items: center;
    justify-content: center;
    cursor: pointer;  /* Cursor muda para o dedinho de clicar */

    /* Efeito de hover */
    &:hover {
        background: ${props => props.theme["blue-300"]};  /* Cor muda ao passar o mouse por cima */
    }
`;
