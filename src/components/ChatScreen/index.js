// components
import ChatHeader from '../ChatHeader';
import ChatBody from '../ChatBody';
import TypeArea from '../TypeArea';
import EmojiPicker from '../EmojiPicker';

// contexts
import { useProfileDrawerToggle } from '../../contexts/ProfileDrawerContext';

function ChatArea() {
  // context value
  const { showEmojiPicker } = useProfileDrawerToggle();

  return (
    <>
      <ChatHeader />
      <ChatBody />
      {showEmojiPicker && <EmojiPicker />}
      <TypeArea />
    </>
  );
}

export default ChatArea;
