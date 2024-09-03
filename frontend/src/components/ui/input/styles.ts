// InputContainer.js ou equivalente
import styled from "styled-components";

export const InputContainer = styled.form`
  display: flex;
  flex-direction: column;
  input {
    width: 320px;
    border-radius: 6px;
    border: 0;
    background: ${props => props.theme["white"]};
    color: ${props => props.theme["gray-600"]};
    padding: 1rem;
    &::placeholder {
      color: ${props => props.theme["gray-200"]};
    }
  }
`;
