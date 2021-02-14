import styled from 'styled-components';

export const SectionContainer = styled.section`
  width: 30%;
  height: 100vh;
  position: fixed;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background: #1e2429;
  border-right: thin solid #30383d;
  top: 0;
  left: 0;

  @media (max-width: 700px) {
    /* position: relative; */
    width: 100vw;
  }
`;
