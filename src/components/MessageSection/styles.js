import styled from 'styled-components';
import bgImage from '../../img/background.jpg';

export const ChatScreen = styled.main`
  width: 70%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${bgImage});
  background-size: contain;
  background-attachment: fixed;
  background-position: center;
  position: fixed;
  top: 0;
  right: 0;

  @media (max-width: 700px) {
    width: 100%;
    right: ${(props) => (props.mobileView ? '0' : '-100%')};
    transition: right 0.5s ease-in-out;
  }
`;
