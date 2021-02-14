import Section from '../../components/Section';
import MessageSection from '../../components/MessageSection';
import ProfileSection from '../../components/ProfileSection';

import { ChatsContainer } from './styles';

function Chats() {
  return (
    <ChatsContainer>
      <Section />
      <MessageSection />
      <ProfileSection />
    </ChatsContainer>
  );
}

export default Chats;
