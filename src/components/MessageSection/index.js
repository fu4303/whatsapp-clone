import WelcomeScreen from '../WelcomeScreen';
import ChatArea from '../ChatScreen';

import { ChatScreen } from './styles';

import { useProfileDrawerToggle } from '../../contexts/ProfileDrawerContext';

function MessageSection() {
  const { showChatArea, mobileChatArea } = useProfileDrawerToggle();

  return (
    <ChatScreen mobileView={mobileChatArea}>
      {showChatArea ? <ChatArea /> : <WelcomeScreen />}
    </ChatScreen>
  );
}

export default MessageSection;
