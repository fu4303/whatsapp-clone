import styled from 'styled-components';

export const ChatBubbleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const BubbleContainer = styled.div`
  max-width: 70%;
  min-width: 180px;
  width: fit-content;
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  padding: 10px 20px;
  border-radius: 0 10px 10px 10px;
  background: #262d31;
  font-size: 0.8rem;
  color: #d4d5d7;
  font-family: 'Nanum Gothic', sans-serif;
  position: relative;
  align-items: flex-start;

  &::before {
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    top: 2px;
    left: -2%;
    border-bottom: 20px solid #262d31;
    border-left: 25px solid transparent;
    transform: rotate(270deg);
  }

  @media (max-width: 700px) {
    min-width: 100px;
  }
`;

export const UserBubbleContainer = styled(BubbleContainer)`
  border-radius: 10px 0 10px 10px;
  background: #056162;
  align-items: flex-end;
  margin-left: auto;

  &::after {
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    border-bottom: 20px solid #056162;
    border-left: 25px solid transparent;
    transform: rotate(180deg);
    top: 0;
    right: -2%;
  }

  &::before {
    content: none;
  }
`;

export const ChatMessage = styled.p`
  font-family: 'Nanum Gothic', sans-serif;
  font-size: 0.9rem;
`;

export const ChatDate = styled.p`
  align-self: flex-end;
  font-family: 'Nanum Gothic', sans-serif;
  font-size: 0.7rem;
  display: flex;
  align-items: center;
  gap: 5px;
`;
