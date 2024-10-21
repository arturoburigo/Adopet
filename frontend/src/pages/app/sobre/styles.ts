import styled from 'styled-components'

export const Container = styled.div`
  max-width: 90%;
  max-height: 80vh; /* Limita a altura para evitar overflow */
  margin: 2.5% auto;
  padding: 1rem;
  background-color: ${({ theme }) => theme['gray-100']};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow-y: auto; /* Adiciona scroll interno caso necessário */
`

export const Title = styled.h1`
  font-size: 1.5rem; /* Tamanho de fonte reduzido */
  color: ${({ theme }) => theme['blue-500']};
  margin-bottom: 1rem;
  text-align: center;
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem; /* Diminui o espaçamento entre os elementos */
  line-height: 1.5; /* Diminui a altura da linha */
`

export const Text = styled.p`
  font-size: 1rem; /* Tamanho de fonte reduzido */
  color: ${({ theme }) => theme['gray-700']};
  text-align: justify;
`

export const List = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-top: 1rem;
`

export const ListItem = styled.li`
  font-size: 1rem; /* Tamanho de fonte reduzido */
  color: ${({ theme }) => theme['blue-700']};
  margin-bottom: 0.5rem; /* Diminui o espaçamento entre os itens */

  &:before {
    content: "🔵";
    margin-right: 0.5rem;
  }
`
