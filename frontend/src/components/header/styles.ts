import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${(props) => props.theme["blue-200"]};
  color: ${(props) => props.theme["gray-600"]};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  box-shadow: none;

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between; 
    gap: 1rem;
  }
`;

export const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 200px;

  img {
    width: 50px;
  }

  @media (max-width: 768px) {
    order: 1; /* Controla a ordem no layout mobile */
  }
`;

interface NavLinksProps {
  isOpen: boolean;
}

export const NavLinks = styled.nav<NavLinksProps>`
  display: flex;
  flex: 1;
  justify-content: center;
  gap: 1rem;
  margin-left: -9rem;

  a {
    text-decoration: none;
    color: ${(props) => props.theme["gray-800"]};
    font-size: 1rem;
    font-weight: 500;

    &:hover {
      text-decoration: none;
    }
  }

  @media (max-width: 768px) {
    display: ${(props) => (props.isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 90px;
    right: 0;
    background-color: ${(props) => props.theme["blue-800"]};
    width: 100%;
    padding: 1rem;
    gap: 1.5rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const HamburgerIcon = styled.div`
  display: none;
  cursor: pointer;
  margin-right: 1rem;

  @media (max-width: 768px) {
    display: flex;
    order: 0; 

  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;

  a {
    color: ${(props) => props.theme["gray-800"]};
    display: flex;
    align-items: center;

    &:hover {
      color: ${(props) => props.theme["blue-600"]};
    }
  }

  @media (max-width: 768px) {
    order: 2; /* Controla a ordem no layout mobile */
    justify-content: flex-end;
    width: 100%;
  }
`;

export const MobileMenu = styled.div`
  display: none;
  margin-top: 20px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 70px;
    right: 0;
    background-color: ${(props) => props.theme["gray-300"]};
    width: 100%;
    padding: 1rem;
    gap: 1.5rem;

    a{
        text-decoration: none;
        color: ${(props) => props.theme["gray-800"]};;
    }
  }
`;
