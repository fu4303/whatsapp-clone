import styled from 'styled-components';

export const SearchContainer = styled.div`
  width: 100%;
  height: 50px;
  padding: 7px 15px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
`;

export const SearchForm = styled.form`
  display: flex;
  background: #262d31;
  gap: 30px;
  padding: 5px 15px;
  border-radius: 20px;
  width: 100%;
  align-items: center;
`;

export const SearchField = styled.input`
  border: none;
  outline: none;
  width: 100%;
  background: inherit;
  font-family: 'Nanum Gothic', sans-serif;
  font-size: 0.9rem;
  color: #a6a8aa;
`;
