import styled from "styled-components";

export const AdminHomeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 50px 10px; 
  width: 100%;
  max-width: 1200px; 
  margin: 0 auto; 
  align-items: center; 
  justify-items: center; 
  min-height: 100vh; 
  padding-top: 50px; 
  flex-direction: column; 
  justify-content: center; 

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr); 
    gap: 25px 15px; 
    padding: 20px 50px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); 
    gap: 20px 10px; 
    padding: 10px 20px;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(
      2,
      1fr
    ); 
    gap: 20px 10px; 
    padding: 10px;
  }
`;

export const Button_div = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-left: 40px;
  margin-top: 20px;
  margin-bottom: 10px;
`;