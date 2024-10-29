import styled from "styled-components";
import {defaultTheme} from "../../../styles/themes/default.ts";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5rem 2rem;
    background-color: ${defaultTheme["gray-100"]};
    min-height: calc(100vh - 80px);
`;

export const Title = styled.h1`
    font-size: 3rem;
    color: ${defaultTheme["blue-800"]};
    margin-bottom: 2rem;
    text-align: center;
`;

export const Description = styled.p`
    font-size: 1.5rem;
    color: ${defaultTheme["gray-500"]};
    text-align: center;
    margin-bottom: 3rem;
    max-width: 600px;
`;

export const ContactInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
    padding: 3rem;
    background-color: ${defaultTheme["white"]};
    border-radius: 15px;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 700px;
`;

export const PhoneNumber = styled.p`
    font-size: 1.7rem;
    color: ${defaultTheme["gray-700"]};
    text-align: center;

    a {
        color: ${defaultTheme["blue-500"]};
        font-weight: bold;
        text-decoration: none;
        transition: color 0.3s;

        &:hover {
            color: ${defaultTheme["blue-400"]};
        }
    }
`;

export const InstagramLink = styled.a`
    display: flex;
    align-items: center;
    font-size: 2rem;
    text-decoration: none;
    color: #e1306c; /* Cor inicial */

    /* Gradiente no texto ao passar o mouse */
    span {
        background: linear-gradient(45deg, #e1306c, #f56040, #fdc468, #bc2a8d);
        -webkit-background-clip: text;
        color: transparent;
        transition: transform 0.3s ease-in-out;
    }

    /* Interação ao passar o mouse */
    &:hover span {
        transform: scale(1.15);
    }

    &:hover {
        text-shadow: 0px 0px 8px rgba(224, 48, 108, 0.5);
    }
`;