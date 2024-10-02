import { useState } from "react";
import apalogo from "../../assets/apalogo.svg";
import {
  HeaderContainer,
  NavLinks,
  LogoSection,
  HamburgerIcon,
  MobileMenu,
} from "./styles";
import { FaBars, FaTimes } from "react-icons/fa";

export function HeaderAdmin() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderContainer>
      <HamburgerIcon onClick={toggleMenu}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </HamburgerIcon>

      <LogoSection>
        <img src={apalogo} alt="APA Logo" />
        <p>APA São Ludgero ADMIN</p>
      </LogoSection>

      <NavLinks isOpen={isOpen}>
        <a href="/admin">Início</a>
        <a href="/evento-admin">Eventos</a>
      </NavLinks>

      {isOpen && (
        <MobileMenu>
          <a href="/admin">Início</a>
          <a href="/evento-admin">Eventos</a>
        </MobileMenu>
      )}
    </HeaderContainer>
  );
}
