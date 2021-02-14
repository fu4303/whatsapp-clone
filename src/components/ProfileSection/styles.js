import styled from 'styled-components';
import { ChatName } from '../ChatItem/styles';

export const ProfileContainer = styled.div`
  position: fixed;
  width: 30vw;
  height: 100vh;
  background: #1e2429;
  border-left: thin solid #30383d;
  top: 0;
  right: ${(props) => (props.drawerStatus ? '0' : '-100%')};
  transition: right 0.5s ease-in-out;

  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const ContainerItems = styled.div`
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-bottom: 70px;

  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #828689;
  }
`;

export const SectionTitle = styled(ChatName)`
  font-size: 0.9rem;
  font-weight: 700;
`;

export const ProfileDetailContainer = styled.div`
  width: 100%;
  height: 50%;
  background: #131c21;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  gap: 20px;
  margin-bottom: 15px;
`;

export const ProfileImage = styled.img`
  min-width: 200px;
  max-width: 200px;
  min-height: 200px;
  max-height: 200px;
  object-fit: cover;
  border-radius: 50%;
`;

export const ProfileName = styled(ChatName)`
  align-self: flex-start;
`;

export const AboutContainer = styled(ProfileDetailContainer)`
  height: fit-content;
  align-items: flex-start;
  gap: 10px;
  padding: 15px 30px;
  font-family: 'Nanum Gothic', sans-serif;
`;

export const AboutTitle = styled.p`
  font-size: 0.8rem;
  color: #009688;
`;

export const AboutText = styled(ChatName)`
  font-size: 1.2rem;
  font-weight: 500;
  padding: 10px 0;
  border-bottom: thin solid #30383d;
  width: 100%;
`;

export const AboutEmail = styled(ChatName)`
  font-weight: 400;
  font-size: 1rem;
`;

export const ProfileAction = styled.div`
  display: flex;
  width: 100%;
  padding: 20px 30px;
  gap: 30px;
  align-items: center;
  background: #131c21;
  margin-bottom: 15px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #262c30;
  }
`;

export const ActionText = styled(ChatName)`
  font-size: 1rem;
  font-weight: 500;
`;

export const DangerText = styled(ActionText)`
  color: #ef697a;
`;
