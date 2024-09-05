import React, { useState } from 'react';
import apalogo from '../../assets/apalogo.svg';
import { HeaderContainer, NavLinks, SocialIcons, LogoSection, HamburgerIcon, MobileMenu } from './styles';
import { FaFacebook, FaInstagram, FaBars, FaTimes } from 'react-icons/fa'; 

export function Header() {
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
                <p>APA São Ludgero</p>
            </LogoSection>

            <NavLinks isOpen={isOpen}>
                <a href="/">Início</a>
                <a href="/doacoes">Doações</a>
                <a href="/eventos">Eventos</a>
                <a href="/sobre-nos">Sobre nós</a>
                <a href="/contato">Contato</a>
            </NavLinks>
            <SocialIcons>
                <a href="https://instagram.com"><FaInstagram size={24} /></a>
                <a href="https://facebook.com"><FaFacebook size={24} /></a>
            </SocialIcons>
            {isOpen && (
                <MobileMenu>
                    <a href="/">Início</a>
                    <a href="/doacoes">Doações</a>
                    <a href="/eventos">Eventos</a>
                    <a href="/sobre-nos">Sobre nós</a>
                    <a href="/contato">Contato</a>
                </MobileMenu>
            )}
        </HeaderContainer>
    );
}
