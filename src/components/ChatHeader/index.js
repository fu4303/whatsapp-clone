import { useState } from 'react';

// icons
import { AiOutlineMore } from 'react-icons/ai';
import { IoArrowBackOutline } from 'react-icons/io5';

// contexts
import { useProfileDrawerToggle } from '../../contexts/ProfileDrawerContext';
import { useChatContext } from '../../contexts/CurrentChat';

// styles and assets
import {
  HeaderContainer,
  ProfileImage,
  ProfileImageContainer,
  DropdownContainer,
  DropdownItem,
  DropdownMenu,
  BackContainer,
} from '../Header/styles';
import { ChatName } from '../ChatItem/styles';
import defaultProfile from '../../img/profile.jpg';

function ChatHeader() {
  // states
  const [showMenu, setShowMenu] = useState(false);

  // context values
  const {
    toggleProfileDrawer,
    toggleMobileChatArea,
  } = useProfileDrawerToggle();
  const { currentContact } = useChatContext();

  const showProfileDrawer = () => {
    setShowMenu(false);
    toggleProfileDrawer();
  };

  return (
    <HeaderContainer>
      <ProfileImageContainer>
        <BackContainer>
          <IoArrowBackOutline
            cursor="pointer"
            color="#E1E1E3"
            fontSize="1.3rem"
            onClick={toggleMobileChatArea}
          />
        </BackContainer>

        <ProfileImage
          onClick={toggleProfileDrawer}
          src={
            currentContact
              ? currentContact.data().contactPhotoURL ||
                currentContact.data().photoURL
                ? currentContact.data().contactPhotoURL ||
                  currentContact.data().photoURL
                : defaultProfile
              : null
          }
          alt="profile"
        />
        <ChatName onClick={toggleProfileDrawer}>
          {currentContact
            ? currentContact.data().contactName ||
              currentContact.data().displayName
              ? currentContact.data().contactName ||
                currentContact.data().displayName
              : 'No Name set'
            : null}
        </ChatName>
      </ProfileImageContainer>

      <DropdownContainer role="navigation">
        <AiOutlineMore
          onClick={() => setShowMenu((prev) => !prev)}
          cursor="pointer"
          color="#A6A8AA"
          fontSize="1.5rem"
        />
        {showMenu && (
          <DropdownMenu>
            <DropdownItem onClick={showProfileDrawer}>
              Contact info
            </DropdownItem>
            <DropdownItem>Clear messages</DropdownItem>
            <DropdownItem>Delete Chat</DropdownItem>
          </DropdownMenu>
        )}
      </DropdownContainer>
    </HeaderContainer>
  );
}

export default ChatHeader;
