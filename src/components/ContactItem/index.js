import { useState } from 'react';

// adapters
import { addContact } from '../../adapters/contacts';
import { checkIfThreadExists, createChatThread } from '../../adapters/thread';

// contexts
import { useAuth } from '../../contexts/AuthContext';
import { useProfileDrawerToggle } from '../../contexts/ProfileDrawerContext';
import { useChatContext } from '../../contexts/CurrentChat';

// styles and assets
import {
  ChatItemContainer,
  ChatMetadata,
  ChatProfile,
  ChatDetails,
  ChatName,
  RecentChat,
} from '../ChatItem/styles';
import defaultProfile from '../../img/profile.jpg';

function ContactItem({ contact, action }) {
  // states
  const [wasClicked, setWasClicked] = useState(false);

  // context values
  const { currentUser } = useAuth();
  const { toggleAddContactDrawer, toggleChatDrawer } = useProfileDrawerToggle();
  const { handleCurrentContact, handleCurrentMessageID } = useChatContext();

  // method to add new contact
  const handleAddContact = () => {
    addContact(
      currentUser.email,
      contact.id,
      contact.data().displayName,
      contact.data().about,
      contact.data().photoURL,
      contact.data().threadId
    )
      .then(() => {
        console.log('Document created successfully');
        toggleAddContactDrawer();
        toggleChatDrawer();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleShowThread = () => {
    handleCurrentContact(contact);
    // check if thread exists
    checkIfThreadExists(
      currentUser.email + '-threads',
      contact.data().contactEmail
    ).then((docs) => {
      if (docs.empty) {
        // create new thread
        createChatThread(
          currentUser.email + '-threads',
          contact.data().contactThread,
          currentUser.email,
          contact.data().contactEmail
        ).then((doc) => {
          // pass message thread to global state
          handleCurrentMessageID(doc);
        });
      } else {
        // pass message thread to global state
        handleCurrentMessageID(docs.docs[0].data().messageID);
      }
    });
  };

  // handle click event based on action props
  const handleClick = () => {
    setWasClicked((prev) => !prev);
    if (action === 'addContact') {
      handleAddContact();
      setWasClicked(false);
    } else if (action === 'showThread') {
      handleShowThread();
      setWasClicked(false);
    }
  };

  return (
    <ChatItemContainer activeChat={wasClicked} onClick={handleClick}>
      <ChatProfile
        src={
          contact.data().photoURL || contact.data().contactPhotoURL
            ? contact.data().photoURL || contact.data().contactPhotoURL
            : defaultProfile
        }
        alt="profile"
      />
      <ChatMetadata>
        <ChatDetails>
          <ChatName>
            {contact.data().displayName || contact.data().contactName
              ? contact.data().displayName || contact.data().contactName
              : 'No display name'}
          </ChatName>
          <RecentChat>
            {contact.data().about || contact.data().contactAbout
              ? contact.data().about || contact.data().contactAbout
              : 'No about'}
          </RecentChat>
        </ChatDetails>
      </ChatMetadata>
    </ChatItemContainer>
  );
}

export default ContactItem;
