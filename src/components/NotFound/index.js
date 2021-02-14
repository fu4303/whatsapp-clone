import styled from 'styled-components';
import { SectionLoadingContainer } from '../SectionLoading/styles';
import { Image } from '../WelcomeScreen/styles';

const ImageContainer = styled(Image)`
  border-radius: 0;
  object-fit: contain;
`;

const ContactName = styled.p`
  color: #009688;
  font-family: 'Nanum Gothic', sans-serif;
  font-size: 1rem;
  font-weight: 500;
`;

function NotFound({ image, text }) {
  return (
    <SectionLoadingContainer>
      <ImageContainer src={image} alt="notFound" />
      <ContactName>{text}</ContactName>
    </SectionLoadingContainer>
  );
}

export default NotFound;
