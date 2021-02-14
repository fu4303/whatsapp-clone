// icons
import { BiCheckDouble } from 'react-icons/bi';

// contexts
import { useChatContext } from '../../contexts/CurrentChat';
import { useAuth } from '../../contexts/AuthContext';

// styles and assets
import {
  ChatItemContainer,
  ChatMetadata,
  ChatProfile,
  ChatDate,
  ChatDetails,
  ChatName,
  RecentChat,
  MetaContainer,
  Unread,
} from './styles';
import defaultProfile from '../../img/profile.jpg';

// utility
import truncateText from '../../utils/truncateText';

function ChatItem({ user, lastMessage, messageID }) {
  // context values
  const { handleCurrentContact, handleCurrentMessageID } = useChatContext();
  const { currentUser } = useAuth();

  const handleClick = () => {
    handleCurrentContact(user);
    handleCurrentMessageID(messageID);
  };

  return (
    <ChatItemContainer onClick={handleClick}>
      <ChatProfile
        src={user.data().photoURL ? user.data().photoURL : defaultProfile}
        alt="profile"
      />
      <ChatMetadata>
        <ChatDetails>
          <ChatName>
            {user.data().displayName ? user.data().displayName : 'No name'}
          </ChatName>
          {lastMessage && (
            <RecentChat>
              {lastMessage.data().sender === currentUser.email && (
                <BiCheckDouble color="#34B7F1" fontSize="1.2rem" />
              )}
              {truncateText(lastMessage.data().message, 25)}
            </RecentChat>
          )}
        </ChatDetails>
        <MetaContainer>
          {lastMessage && (
            <ChatDate>
              {lastMessage.data().sentAt.toDate().toLocaleDateString('en-US')}
            </ChatDate>
          )}
          <Unread>3</Unread>
        </MetaContainer>
      </ChatMetadata>
    </ChatItemContainer>
  );
}

export default ChatItem;
