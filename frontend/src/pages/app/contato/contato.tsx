// src/pages/Contato/Contato.tsx
import { Header } from "../../../components/header/header";
import { Container, Title, ContactInfo, PhoneNumber, InstagramLink, Description } from "./styles";

export default function Contato() {
    return (
        <>
            <Header />
            <Container>
                <Title>Entre em Contato</Title>
                <Description>
                    Quer saber mais? Siga-nos no Instagram para acompanhar novidades e atualizações!
                </Description>
                <ContactInfo>
                    <PhoneNumber>
                        <strong>Telefone:</strong> <a href="https://wa.link/aljfdq">+55 48 99930‑2968</a>
                    </PhoneNumber>
                    <InstagramLink href="https://www.instagram.com/apasaoludgero/" target="_blank">
                        <span>Instagram</span>
                    </InstagramLink>
                </ContactInfo>
            </Container>
        </>
    );
}
