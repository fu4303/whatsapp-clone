import { useContext, useState, createContext, useEffect } from 'react';

const ProfileDrawerToggleContext = createContext();

export function useProfileDrawerToggle() {
  return useContext(ProfileDrawerToggleContext);
}

export function ProfileDrawerToggleProvider({ children }) {
  const [drawerStatus, setDrawerStatus] = useState(false);
  const [chatDrawerStatus, setChatDrawerStatus] = useState(false);
  const [addContactDrawer, setAddContactDrawer] = useState(false);
  const [settingsStatus, setSettingsStatus] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [showProfileDrawer, setShowProfileDrawer] = useState(false);
  const [showChatArea, setShowChatArea] = useState(false);
  const [mobileChatArea, setMobileChatArea] = useState(false);

  const toggleChatDrawer = () => {
    return setChatDrawerStatus((prev) => !prev);
  };

  const toggleDrawer = () => {
    return setDrawerStatus((prev) => !prev);
  };

  const toggleAddContactDrawer = () => {
    return setAddContactDrawer((prev) => !prev);
  };

  const toggleSettingsDrawer = () => {
    return setSettingsStatus((prev) => !prev);
  };

  const toggleEmojiPicker = () => {
    return setShowEmojiPicker((prev) => !prev);
  };

  const toggleProfileDrawer = () => {
    return setShowProfileDrawer((prev) => !prev);
  };

  const toggleChatArea = () => {
    return setShowChatArea(true);
  };

  const toggleMobileChatArea = () => {
    return setMobileChatArea((prev) => !prev);
  };

  useEffect(() => {
    setDrawerStatus(false);
    setChatDrawerStatus(false);
    setAddContactDrawer(false);
    setSettingsStatus(false);
    setShowEmojiPicker(false);
    setShowProfileDrawer(false);
    setShowChatArea(false);
    setMobileChatArea(false);
  }, []);

  const value = {
    drawerStatus,
    toggleDrawer,
    chatDrawerStatus,
    toggleChatDrawer,
    addContactDrawer,
    toggleAddContactDrawer,
    settingsStatus,
    toggleSettingsDrawer,
    showEmojiPicker,
    toggleEmojiPicker,
    showProfileDrawer,
    toggleProfileDrawer,
    showChatArea,
    toggleChatArea,
    setChatDrawerStatus,
    mobileChatArea,
    toggleMobileChatArea,
  };

  return (
    <ProfileDrawerToggleContext.Provider value={value}>
      {children}
    </ProfileDrawerToggleContext.Provider>
  );
}
