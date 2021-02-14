import { useState, useRef } from 'react';

import ReactLoading from 'react-loading';

import { useHistory, Redirect } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext';

import logo from '../../img/whatsapp.svg';

import {
  Container,
  Banner,
  BannerLink,
  BannerOption,
  BannerTitle,
  BrandName,
  Button,
  FormField,
  FormGroup,
  FormLabel,
  Header,
  HeaderContainer,
  HomeBody,
  HomeContainer,
  Logo,
  SignUpForm,
  LoadingBox,
} from './styles';

function Home() {
  const [slider, setSlider] = useState(false);
  const [loading, setLoading] = useState(false);
  const signupEmailRef = useRef();
  const signupPasswordRef = useRef();
  const signinEmailRef = useRef();
  const signinPasswordRef = useRef();

  const history = useHistory();

  const { signup, signin, currentUser } = useAuth();

  const toggleSlider = () => {
    setSlider((prev) => !prev);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    setLoading(true);

    signup(signupEmailRef.current.value, signupPasswordRef.current.value)
      .then(() => {
        history.push('/chats');
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSignin = (e) => {
    e.preventDefault();
    setLoading(true);

    signin(signinEmailRef.current.value, signinPasswordRef.current.value)
      .then(() => {
        history.push('/chats');
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      {currentUser ? (
        <Redirect to="/chats" />
      ) : (
        <Container>
          <HomeContainer>
            <HeaderContainer>
              <Header>
                <Logo src={logo} alt="logo" />
                <BrandName>whatsapp web</BrandName>
              </Header>
            </HeaderContainer>
            <HomeBody>
              <SignUpForm onSubmit={(e) => handleSignin(e)}>
                <BannerTitle>Sign In</BannerTitle>
                <FormGroup>
                  <FormField
                    placeholder="Email"
                    ref={signinEmailRef}
                    type="email"
                    id="signinEmail"
                  />
                  <FormLabel htmlFor="signinEmail">Email</FormLabel>
                </FormGroup>
                <FormGroup>
                  <FormField
                    ref={signinPasswordRef}
                    type="password"
                    id="signinPassword"
                    placeholder="Password"
                  />
                  <FormLabel htmlFor="signinPassword">Password</FormLabel>
                </FormGroup>
                {loading ? (
                  <LoadingBox>
                    <ReactLoading
                      width="2.5rem"
                      height="2.5rem"
                      type="spin"
                      color="#009688"
                    />
                  </LoadingBox>
                ) : (
                  <Button type="submit">Sign In</Button>
                )}
              </SignUpForm>
              <Banner sliderStatus={slider}>
                <BannerTitle>To use WhatsApp on your computer:</BannerTitle>
                <BannerOption>1. Sign Up using an email address</BannerOption>
                <BannerOption>
                  2. Search for your friends using their email address
                </BannerOption>
                <BannerOption>3. Happy Chating</BannerOption>
                <BannerLink onClick={toggleSlider}>
                  {slider
                    ? "Don't have an account? Sign up"
                    : 'Already have an account? Sign in'}
                </BannerLink>
              </Banner>
              <SignUpForm onSubmit={(e) => handleSignup(e)}>
                <BannerTitle>Sign Up</BannerTitle>
                <FormGroup>
                  <FormField
                    placeholder="Email"
                    ref={signupEmailRef}
                    type="email"
                    id="signupEmail"
                  />
                  <FormLabel htmlFor="signupEmail">Email</FormLabel>
                </FormGroup>
                <FormGroup>
                  <FormField
                    ref={signupPasswordRef}
                    type="password"
                    id="signupPassword"
                    placeholder="Password"
                  />
                  <FormLabel htmlFor="signupPassword">Password</FormLabel>
                </FormGroup>
                {loading ? (
                  <LoadingBox>
                    <ReactLoading
                      width="2.5rem"
                      height="2.5rem"
                      type="spin"
                      color="#009688"
                    />
                  </LoadingBox>
                ) : (
                  <Button type="submit">Sign Up</Button>
                )}
              </SignUpForm>
            </HomeBody>
          </HomeContainer>
        </Container>
      )}
    </>
  );
}

export default Home;
