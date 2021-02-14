import styled from 'styled-components';

export const ChatBodyContainer = styled.main`
  width: 100%;
  height: 100%;
  background: rgba(30, 36, 41, 0.7);
  display: flex;
  flex-direction: column-reverse;
  box-sizing: border-box;
  padding: 20px 50px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #828689;
  }

  @media (max-width: 700px) {
    padding: 20px;

    &::-webkit-scrollbar {
      width: 3px;
    }
  }
`;

export const MessageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: auto;
`;

export const NoMessageText = styled.p`
  color: #d4d5d7;
  font-size: 0.8rem;
  font-family: 'Nanum Gothic', sans-serif;
  background: #262d31;
  padding: 10px 20px;
  width: fit-content;
  border-radius: 5px;
`;
