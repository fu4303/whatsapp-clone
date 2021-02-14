import { useState, useEffect } from 'react';
import { FiLink } from 'react-icons/fi';
import { GrEmoji } from 'react-icons/gr';
import { FaMicrophone } from 'react-icons/fa';

import { ProfileImageContainer } from '../Header/styles';
import { ChatMessage, MessageContainer, MessageForm } from './styles';

import { useProfileDrawerToggle } from '../../contexts/ProfileDrawerContext';
import { useChatContext } from '../../contexts/CurrentChat';
import { useAuth } from '../../contexts/AuthContext';

import { sendMessage } from '../../adapters/thread';

function TypeArea() {
  const [message, setMessage] = useState();
  const { toggleEmojiPicker } = useProfileDrawerToggle();
  const { selectedEmoji, currentMessageID } = useChatContext();
  const { currentUser } = useAuth();

  useEffect(() => {
    selectedEmoji && setMessage((prev) => prev + selectedEmoji);
  }, [selectedEmoji]);

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(message, currentUser.email, currentMessageID)
      .then((doc) => {
        console.log('message sent');
      })
      .catch((err) => {
        console.error(err);
      });
    setMessage('');
  };

  return (
    <MessageContainer>
      <ProfileImageContainer>
        <GrEmoji
          cursor="pointer"
          onClick={toggleEmojiPicker}
          color="#A6A8AA"
          fontSize="1.5rem"
        />
        <FiLink color="#A6A8AA" fontSize="1.5rem" />
      </ProfileImageContainer>
      <MessageForm onSubmit={(e) => handleSubmit(e)}>
        <ChatMessage
          onChange={(e) => setMessage(e.currentTarget.value)}
          placeholder="Type a message"
          value={message}
        />
      </MessageForm>

      <FaMicrophone color="#A6A8AA" fontSize="1.5rem" />
    </MessageContainer>
  );
}

export default TypeArea;
