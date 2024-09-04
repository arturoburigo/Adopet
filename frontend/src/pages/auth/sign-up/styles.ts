import styled from 'styled-components'

export const SignInContainer = styled.main`
    width: 100%;
    max-width: 1120px;
    margin: 1rem auto;
    padding: 0 1.5rem;

    @media (max-width: 768px) {
        padding: 0 1rem;
    }
`;

export const SignInContent = styled.div`    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 4rem;

    @media (max-width: 768px) {
        padding: 2rem;
    }

    h2 {
        font-size: 3rem;
        text-align: center;
        margin-top: 2rem;
        margin-bottom: 2rem;
        @media (max-width: 768px) {
            font-size: 2.5rem;
        }
    }

    img {
        max-width: 80%;
        height: auto;
        margin-bottom: 2rem;
    }
`;

export const LinktoSignUp = styled.div`
    margin-top: 10px;
    a{
        text-decoration: none;
        color: ${props => props.theme['blue-800']};
    }
`;

