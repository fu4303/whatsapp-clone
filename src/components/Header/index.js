import { useState } from 'react';

import { MdChat } from 'react-icons/md';
import { AiOutlineMore } from 'react-icons/ai';
import { IoMdAdd } from 'react-icons/io';

import defaultProfile from '../../img/profile.jpg';

import {
  HeaderContainer,
  ProfileImage,
  IconContainer,
  DropdownContainer,
  DropdownMenu,
  DropdownItem,
  AddContainer,
  ContactContainer,
} from './styles';

import { useProfileDrawerToggle } from '../../contexts/ProfileDrawerContext';
import { useAuth } from '../../contexts/AuthContext';

function Header() {
  const {
    toggleDrawer,
    toggleChatDrawer,
    toggleAddContactDrawer,
    toggleSettingsDrawer,
  } = useProfileDrawerToggle();

  const { currentUser, logout } = useAuth();

  const [showMenu, setShowMenu] = useState(false);

  const showProfile = () => {
    setShowMenu(false);
    toggleDrawer();
  };

  const showSettings = () => {
    setShowMenu(false);
    toggleSettingsDrawer();
  };

  const handleLogout = () => {
    setShowMenu(false);
    logout();
  };

  return (
    <HeaderContainer>
      <ProfileImage
        onClick={toggleDrawer}
        src={currentUser.photoURL ? currentUser.photoURL : defaultProfile}
        alt="profile"
      />
      <IconContainer>
        <AddContainer>
          <IoMdAdd
            cursor="pointer"
            onClick={toggleAddContactDrawer}
            color="#A6A8AA"
            fontSize="1.5rem"
          />
        </AddContainer>

        {/* <StatusContainer>
          <ImWondering2 cursor="pointer" color="#A6A8AA" fontSize="1.5rem" />
        </StatusContainer> */}

        <ContactContainer>
          <MdChat
            cursor="pointer"
            onClick={toggleChatDrawer}
            color="#A6A8AA"
            fontSize="1.5rem"
          />
        </ContactContainer>

        <DropdownContainer>
          <AiOutlineMore
            onClick={() => setShowMenu((prev) => !prev)}
            cursor="pointer"
            color="#A6A8AA"
            fontSize="1.5rem"
          />
          {showMenu && (
            <DropdownMenu>
              <DropdownItem onClick={showProfile}>Profile</DropdownItem>
              <DropdownItem onClick={showSettings}>Settings</DropdownItem>
              <DropdownItem onClick={handleLogout}>Log out</DropdownItem>
            </DropdownMenu>
          )}
        </DropdownContainer>
      </IconContainer>
    </HeaderContainer>
  );
}

export default Header;
