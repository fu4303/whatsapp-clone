import styled from 'styled-components';

export const BannerContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: absolute;
  background: #1e2429;
  left: ${(props) => (props.showDrawer ? '0' : '-100%')};
  transition: left 0.3s ease-in-out;
`;

export const Header = styled.div`
  min-height: 17%;
  width: 100%;
  background: #30383d;
  display: flex;
  gap: 30px;
  padding: 20px;
  align-items: flex-end;
`;

export const HeaderText = styled.p`
  color: #e1e1e3;
  font-size: 1.1rem;
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: 700;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const ContactListContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #828689;
  }
`;

export const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
`;

export const ImageInput = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -10;
`;

export const EditOverlay = styled.label`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  position: absolute;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  padding: 50px;
`;

export const EditPhotoText = styled.p`
  color: #ffffff;
  font-family: 'Nanum Gothic', sans-serif;
  text-transform: uppercase;
  font-size: 0.8rem;
  text-align: center;
  font-weight: 500;
`;

export const DetailContainer = styled.div`
  display: flex;
  padding: 30px;
  flex-direction: column;
  gap: 10px;
`;

export const DetailTitle = styled.p`
  color: #009688;
  font-family: 'Nanum Gothic', sans-serif;
  font-size: 0.9rem;
`;

export const DetailForm = styled.form`
  display: flex;
  width: 100%;
  gap: 5px;
`;

export const DetailInput = styled.input`
  background: transparent;
  border: none;
  outline: none;
  width: 100%;
  font-family: 'Nanum Gothic', sans-serif;
  font-size: 1.1rem;
  color: #e1e1e3;
  padding: 5px 0;

  &:focus {
    border-bottom: thin solid #009688;
  }
`;

export const DetailLabel = styled.label`
  cursor: pointer;
`;

export const DetailDesc = styled.p`
  color: #30383d;
  font-family: 'Nanum Gothic', sans-serif;
  font-size: 0.8rem;
  color: #a6a8aa;
`;
