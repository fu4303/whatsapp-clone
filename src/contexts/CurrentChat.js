import { useContext, useState, useEffect, createContext } from 'react';

import { useProfileDrawerToggle } from './ProfileDrawerContext';

const ChatContext = createContext();

export function useChatContext() {
  return useContext(ChatContext);
}

export function ChatProvider({ children }) {
  const [currentContact, setCurrentContact] = useState();
  const [currentMessageID, setCurrentMessageID] = useState();
  const [selectedEmoji, setSelectedEmoji] = useState();

  useEffect(() => {
    setCurrentContact(null);
    setCurrentMessageID(null);
  }, []);

  const {
    toggleChatArea,
    toggleEmojiPicker,
    setChatDrawerStatus,
    toggleMobileChatArea,
  } = useProfileDrawerToggle();

  const handleCurrentContact = (contact) => {
    setCurrentContact(contact);
  };

  const handleCurrentMessageID = (messageId) => {
    setCurrentMessageID(messageId);
    toggleChatArea();
    toggleMobileChatArea();
    setChatDrawerStatus(false);
  };

  const handleSelectedEmoji = (emoji) => {
    setSelectedEmoji(emoji);
    toggleEmojiPicker();
  };

  const value = {
    currentContact,
    handleCurrentContact,
    currentMessageID,
    handleCurrentMessageID,
    selectedEmoji,
    handleSelectedEmoji,
  };

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
}
