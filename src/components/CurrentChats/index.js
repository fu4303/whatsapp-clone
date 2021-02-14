import { useState, useEffect } from 'react';

// adapters
import { getProfile } from '../../adapters/updateProfile';
import { getMessages } from '../../adapters/thread';
import { db } from '../../adapters/firebase';

// contexts
import { useAuth } from '../../contexts/AuthContext';

// components
import ChatItem from '../ChatItem';
import SectionLoading from '../SectionLoading';

// styles
import { ContactListContainer } from '../ProfileDrawer/style';

function CurrentChats() {
  // states
  const [recentChats, setRecentChats] = useState([]);
  const [loading, setLoading] = useState(false);

  // context values
  const { currentUser } = useAuth();

  useEffect(() => {
    setLoading(true);
    // Get signed in user thread
    db.collection(currentUser.email + '-threads')
      .orderBy('messageID')
      .onSnapshot((data) => {
        const messageThreads = data.docs;
        messageThreads.forEach((thread) => {
          let chatDetails = {};
          getProfile(thread.data().member).then((doc) => {
            const userProfile = doc;
            getMessages(thread.data().messageID).then((docs) => {
              let lastMessage = null;
              if (docs.size > 0) {
                lastMessage = docs.docs[docs.size - 1];
              }
              chatDetails = {
                userProfile,
                lastMessage,
                messageId: thread.data().messageID,
              };
              setRecentChats((prev) => [...prev, chatDetails]);
              setLoading(false);
            });
          });
        });
      });
  }, [currentUser.email]);

  return (
    <ContactListContainer>
      {loading ? (
        <SectionLoading />
      ) : (
        recentChats &&
        recentChats.map((chat, ind) => (
          <ChatItem
            key={ind}
            messageID={chat.messageId}
            user={chat.userProfile}
            lastMessage={chat.lastMessage}
          />
        ))
      )}
    </ContactListContainer>
  );
}

export default CurrentChats;
