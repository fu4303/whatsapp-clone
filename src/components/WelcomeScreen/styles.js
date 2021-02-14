import styled from 'styled-components';

export const ScreenContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 100px;
  background: #262d31;

  @media (max-width: 700px) {
    padding: 30px;
  }
`;

export const Image = styled.img`
  width: 300px;
  height: 300px;
  object-fit: contain;
`;

export const WelcomeText = styled.p`
  font-size: 1.8rem;
  color: #a6a8aa;
  font-family: 'Nanum Gothic', sans-serif;
  text-align: center;
`;

export const WelcomeDesc = styled.p`
  font-size: 0.8rem;
  color: #a6a8aa;
  font-family: 'Nanum Gothic', sans-serif;
  text-align: center;
`;
