import styled from 'styled-components';
export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 15px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ModalTitle = styled.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 10px;
  text-align: center;
`;

export const ModalImage = styled.img`
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const ModalContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const InfoItem = styled.p`
  font-size: 18px;
  color: #555;
  text-align: left;
`;

export const InfoLabel = styled.span`
  font-weight: bold;
  color: #444;
`;

export const GenderIcon = styled.span<{ color: string }>`
  font-size: 22px;
  color: ${({ color }) => color};
  margin-left: 5px;
`;

export const ModalFooter = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  gap: 10px;
`;

export const CloseButton = styled.button`
  background-color: #BE0D0D;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #A10B0B;
  }
`;

export const WhatsappButton = styled.a`
  display: flex;
  align-items: center;
  background-color: #25D366;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1DA851;
  }

  svg {
    margin-right: 8px;
  }
`;
