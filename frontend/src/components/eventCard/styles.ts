
import styled from 'styled-components';

export const CardContainer = styled.div`
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    padding: 16px;
    max-width: 400px; 
    width: 100%; 
`;

export const Title = styled.h1`
    font-size: 24px;
    margin: 0;
    margin-bottom: 8px; 
    color: #333; 
    text-align: left; 
`;




export const Date = styled.p`
    font-size: 16px;
    margin: 0; 
    color: #777; 
    text-align: left; 
`;

export const Description = styled.p`
    font-size: 14px;
    padding-bottom: 20px;
    color: #555; 
    text-align: center; 
`;

export const EventImage = styled.img`
    width: 100%;
    height: auto; 
    border-radius: 8px; 
    margin: 16px 0; 
`;


export const MobileCardContainer = styled(CardContainer)`
    padding: 12px; 
    
    @media (max-width: 600px) {
        padding: 8px; 
    }
`;
