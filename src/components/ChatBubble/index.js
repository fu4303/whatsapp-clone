import Bubble from 'react-reveal/Bounce';

// icons
import { BiCheckDouble } from 'react-icons/bi';

// contexts
import { useAuth } from '../../contexts/AuthContext';

// styles
import {
  BubbleContainer,
  ChatBubbleContainer,
  UserBubbleContainer,
  ChatDate,
  ChatMessage,
} from './styles';

function ChatBubble({ message }) {
  // context values
  const { currentUser } = useAuth();

  return (
    <ChatBubbleContainer>
      {message.data().sender === currentUser.email ? (
        <Bubble bottom>
          <UserBubbleContainer>
            <ChatMessage>{message.data().message}</ChatMessage>
            <ChatDate>
              {message.data().sentAt &&
                message.data().sentAt.toDate().toLocaleTimeString('en-US')}
              <BiCheckDouble color="#34B7F1" fontSize="1.2rem" />{' '}
            </ChatDate>
          </UserBubbleContainer>
        </Bubble>
      ) : (
        <Bubble bottom>
          <BubbleContainer>
            <ChatMessage>{message.data().message}</ChatMessage>
            <ChatDate>
              {message.data().sentAt &&
                message.data().sentAt.toDate().toLocaleTimeString('en-US')}
            </ChatDate>
          </BubbleContainer>
        </Bubble>
      )}
    </ChatBubbleContainer>
  );
}

export default ChatBubble;
