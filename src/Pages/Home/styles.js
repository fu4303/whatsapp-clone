import styled from 'styled-components';

export const Container = styled.div`
  background: #000;
  width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
`;

export const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;

  @media (max-width: 700px) {
    /* width: 100vw; */
    /* min-height: 100vh; */
  }
`;

export const HeaderContainer = styled.div`
  width: 100%;
  min-height: 35vh;
  max-height: 35vh;
  background: #00bfa5;
  display: flex;
  padding: 20px 50px;
  box-sizing: border-box;

  @media (max-width: 700px) {
    padding: 20px;
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  height: 50px;
  gap: 15px;
  align-items: center;
  padding: 5px;
`;

export const HomeBody = styled.div`
  width: 80%;
  max-height: 500px;
  min-height: 500px;
  background: #ffffff;
  align-self: center;
  position: absolute;
  top: 40%;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;

  @media (max-width: 700px) {
    width: 100%;
    flex-direction: column;
    padding: 0;
    min-height: 100vh;
  }
`;

export const Logo = styled.img`
  width: 35px;
`;

export const BrandName = styled.p`
  text-transform: uppercase;
  color: white;
  font-family: 'Source Sans Pro', sans-serif;

  @media (max-width: 700px) {
    font-size: 1.2rem;
  }
`;

export const Banner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 60%;
  height: 500px;
  padding: 80px 70px;
  background: #eff7f6;
  position: absolute;
  top: 0;
  left: ${(props) => (props.sliderStatus ? '40%' : '0')};
  z-index: 100;
  transition: left 0.5s ease-in-out;
  box-sizing: border-box;

  @media (max-width: 700px) {
    padding: 20px;
    width: 100%;
    order: 2;
    height: 50%;
    left: 0;
    top: ${(props) => (props.sliderStatus ? '50%' : '0')};
    transition: top 0.5s ease-in-out;
  }
`;

export const BannerTitle = styled.p`
  margin-bottom: 20px;
  font-family: 'Nanum Gothic', sans-serif;
  font-size: 1.6rem;
`;

export const BannerOption = styled.p`
  font-family: 'Nanum Gothic', sans-serif;
  font-size: 1.2rem;
`;

export const BannerLink = styled.p`
  text-decoration: none;
  color: #00bfa5;
  font-family: 'Nanum Gothic', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  margin: 20px 0;
  cursor: pointer;
`;

export const SignUpForm = styled.form`
  width: 40%;
  display: flex;
  flex-direction: column;
  padding: 80px 70px;
  box-sizing: border-box;

  @media (max-width: 700px) {
    padding: 30px;
    width: 100%;
    order: 1;
  }
`;

export const FormGroup = styled.div`
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 100%;
`;

export const FormLabel = styled.label`
  position: absolute;
  top: 0;
  display: none;
  opacity: 0;
  transition: all 0.2s ease-in-out;
  color: #9b9b9b;
  font-family: 'Nanum Gothic', sans-serif;
`;

export const FormField = styled.input`
  width: 100%;
  border: 0;
  border-bottom: 2px solid #9b9b9b;
  outline: 0;
  /* font-size: 1.3rem; */
  padding: 7px 0;
  background: transparent;
  font-family: 'Nanum Gothic', sans-serif;

  &:focus {
    border: none;
    outline: none;
    border-bottom: 2px solid #00bfa5;

    &::placeholder {
      display: none;
      opacity: 0;
    }
  }

  &:focus ~ ${FormLabel} {
    /* top: 0; */
    font-size: 1rem;
    display: block;
    opacity: 1;
  }
`;

export const Button = styled.button`
  margin-top: 20px;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 1.2rem;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  background: #00bfa5;
  cursor: pointer;
`;

export const LoadingBox = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
`;
