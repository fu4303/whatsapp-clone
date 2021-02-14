import styled from 'styled-components';

export const HeaderContainer = styled.nav`
  width: 100%;
  height: 60px;
  padding: 15px 20px;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  background: #262d31;

  @media (max-width: 700px) {
    height: 80px;
    padding: 15px 10px;
  }
`;

export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;

  @media (max-width: 700px) {
    width: 50px;
    height: 50px;
    margin-right: 15px;
  }
`;

export const ProfileImageContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  cursor: pointer;

  @media (max-width: 700px) {
    gap: 5px;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 25px;
`;

export const BackContainer = styled.div`
  display: none;
  opacity: 0;

  @media (max-width: 700px) {
    display: block;
    opacity: 1;
  }
`;

export const DropdownContainer = styled.nav`
  position: relative;
`;

export const DropdownMenu = styled.ul`
  position: absolute;
  width: 200px;
  right: 0;
  background: #262d31;
  z-index: 100;
  /* padding: 10px 20px; */
  list-style-type: none;
  margin-top: 0.5rem;
  border-radius: 5px;
`;

export const DropdownItem = styled.li`
  color: #d4d5d7;
  font-family: 'Nanum Gothic', sans-serif;
  padding: 15px 20px;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    background: #1c2123;
  }
`;

export const StatusContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    position: absolute;
    content: 'Status is not available at the moment';
    padding: 5px;
    color: #d4d5d7;
    top: 0;
    display: none;
    opacity: 0;
    width: 150px;
    transition: all 0.5s ease;
    text-align: center;
    margin-top: 2rem;
    font-size: 0.8rem;
  }

  &:hover {
    &::before {
      display: block;
      opacity: 1;
    }
  }
`;

export const AddContainer = styled(StatusContainer)`
  &::before {
    content: 'add new contact';
  }
`;

export const ContactContainer = styled(StatusContainer)`
  &::before {
    content: 'view contact list';
  }
`;
