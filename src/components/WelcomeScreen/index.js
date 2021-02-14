import { ScreenContainer, Image, WelcomeText, WelcomeDesc } from './styles';
import welcomeImage from '../../img/chat.svg';

function WelcomeScreen() {
  return (
    <ScreenContainer>
      <Image src={welcomeImage} alt="welcome" />
      <WelcomeText>Stay connected with your loved ones</WelcomeText>
      <WelcomeDesc>
        WhatsApp connects to your phone to sync messages. To reduce data usage,
        connect your phone to WiFi
      </WelcomeDesc>
    </ScreenContainer>
  );
}

export default WelcomeScreen;
