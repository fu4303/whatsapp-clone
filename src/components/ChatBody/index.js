import { useEffect, useState } from 'react';

// adapters
import { db } from '../../adapters/firebase';

// contexts
import { useChatContext } from '../../contexts/CurrentChat';

// components
import ChatBubble from '../ChatBubble';

// styles
import { ChatBodyContainer, NoMessageText, MessageContainer } from './styles';

function ChatBody() {
  // states
  const [messages, setMessages] = useState();

  // contexts values
  const { currentMessageID } = useChatContext();

  useEffect(() => {
    // get messages in message collection of currentMessageID
    currentMessageID &&
      db
        .collection(currentMessageID)
        .orderBy('sentAt', 'desc')
        .onSnapshot((snapshot) => {
          console.log(snapshot.docs);
          setMessages(snapshot.docs);
        });
  }, [currentMessageID]);

  return (
    <ChatBodyContainer>
      {messages?.length > 0 ? (
        messages.map((message) => (
          <ChatBubble key={message.id} message={message} />
        ))
      ) : (
        <MessageContainer>
          <NoMessageText>No messages yet</NoMessageText>
        </MessageContainer>
      )}
    </ChatBodyContainer>
  );
}

export default ChatBody;
