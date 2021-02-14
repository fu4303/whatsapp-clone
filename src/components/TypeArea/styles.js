import styled from 'styled-components';
import { HeaderContainer } from '../Header/styles';

export const ChatMessage = styled.input`
  width: 100%;
  padding: 12px;
  border-radius: 20px;
  margin: 0 20px;
  background: #30383d;
  border: none;
  outline: none;
  font-family: 'Nanum Gothic', sans-serif;
  font-size: 1rem;
  color: #a6a8aa;

  @media (max-width: 700px) {
    width: 90%;
  }
`;

export const MessageForm = styled.form`
  width: 80%;
`;

export const MessageContainer = styled(HeaderContainer)`
  background: #1e2428;
  box-sizing: border-box;
`;
