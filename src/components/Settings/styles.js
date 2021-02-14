import styled from 'styled-components';

export const ProfileMenuContainer = styled.div`
  padding: 20px;
  width: 100%;
  display: flex;
  gap: 20px;
  cursor: pointer;

  &:hover {
    background: #262c30;
  }
`;

export const ProfileImage = styled.img`
  min-width: 80px;
  max-width: 80px;
  min-height: 80px;
  max-height: 80px;
  border-radius: 50%;
  object-fit: cover;
`;

export const ProfileDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  justify-content: center;
`;

export const ProfileName = styled.p`
  color: white;
  font-family: 'Nanum Gothic', sans-serif;
  font-size: 1.3rem;
  font-weight: 500;
`;

export const ProfileBio = styled.p`
  color: #d4d5d7;
  font-family: 'Nanum Gothic', sans-serif;
  font-size: 0.9rem;
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background: #262c30;
  }
`;

export const MenuIcon = styled.div`
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
`;

export const MenuDetails = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px 0;
  border-bottom: thin solid #30383d;
`;

export const MenuName = styled(ProfileName)`
  font-size: 1rem;
  color: #d4d5d7;
`;
