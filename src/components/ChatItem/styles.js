import styled from 'styled-components';

export const ChatItemContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  gap: 20px;
  background: ${(props) => props.activeChat && '#262c30'};
  align-items: center;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #262c30;
  }
`;

export const ChatProfile = styled.img`
  margin-left: 10px;
  min-width: 50px;
  min-height: 50px;
  max-width: 50px;
  max-height: 50px;
  object-fit: cover;
  border-radius: 50%;
`;

export const ChatMetadata = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  border-bottom: thin solid #30383d;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const ChatDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ChatName = styled.p`
  font-size: 1.1rem;
  color: #ffffff;
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: 700;
`;

export const RecentChat = styled.p`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 5px;
  font-size: 0.8rem;
  color: #d4d5d7;
  font-family: 'Nanum Gothic', sans-serif;
`;

export const ChatDate = styled.p`
  font-size: 0.7rem;
  color: #d4d5d7;
  font-family: 'Nanum Gothic', sans-serif;
  color: #00af9c;
`;

export const MetaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Unread = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1e2429;
  background: #00af9c;
  border-radius: 50%;
  font-size: 1rem;
  font-weight: 700;
  width: 20px;
  height: 20px;
  align-self: flex-end;
`;
