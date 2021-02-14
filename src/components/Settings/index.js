import { useEffect, useState } from 'react';

import { IoArrowBackOutline } from 'react-icons/io5';
import { BsFillBellFill } from 'react-icons/bs';
import { CgDarkMode } from 'react-icons/cg';
import { MdWallpaper } from 'react-icons/md';
import { ImBlocked } from 'react-icons/im';
import { MdHelp } from 'react-icons/md';

import { BannerContainer, Header, HeaderText } from '../ProfileDrawer/style';

import {
  ProfileMenuContainer,
  ProfileImage,
  ProfileDetailContainer,
  ProfileName,
  ProfileBio,
  MenuDetails,
  MenuItem,
  MenuIcon,
  MenuName,
} from './styles';
import defaultProfile from '../../img/profile.jpg';

import { useProfileDrawerToggle } from '../../contexts/ProfileDrawerContext';
import { useAuth } from '../../contexts/AuthContext';
import { getProfile } from '../../adapters/updateProfile';

function AddContactDrawer() {
  const { settingsStatus, toggleSettingsDrawer } = useProfileDrawerToggle();
  const { currentUser } = useAuth();
  const [about, setAbout] = useState();

  useEffect(() => {
    getProfile(currentUser.email)
      .then((doc) => setAbout(doc.data().about))
      .catch(console.error('something went wrong'));
  });

  return (
    <BannerContainer showDrawer={settingsStatus}>
      <Header>
        <IoArrowBackOutline
          cursor="pointer"
          color="#E1E1E3"
          fontSize="1.3rem"
          onClick={toggleSettingsDrawer}
        />
        <HeaderText>Settings</HeaderText>
      </Header>

      <ProfileMenuContainer>
        <ProfileImage
          src={currentUser.photoURL ? currentUser.photoURL : defaultProfile}
        />
        <ProfileDetailContainer>
          <ProfileName>
            {currentUser.displayName ? currentUser.displayName : 'No name set'}
          </ProfileName>
          <ProfileBio>{about}</ProfileBio>
        </ProfileDetailContainer>
      </ProfileMenuContainer>

      <MenuItem>
        <MenuIcon>
          <BsFillBellFill color="#E1E1E3" fontSize="1.5rem" />
        </MenuIcon>
        <MenuDetails>
          <MenuName>Notifications</MenuName>
        </MenuDetails>
      </MenuItem>
      <MenuItem>
        <MenuIcon>
          <CgDarkMode color="#E1E1E3" fontSize="1.5rem" />
        </MenuIcon>
        <MenuDetails>
          <MenuName>Theme</MenuName>
        </MenuDetails>
      </MenuItem>
      <MenuItem>
        <MenuIcon>
          <MdWallpaper color="#E1E1E3" fontSize="1.5rem" />
        </MenuIcon>
        <MenuDetails>
          <MenuName>Chat Wallpaper</MenuName>
        </MenuDetails>
      </MenuItem>
      <MenuItem>
        <MenuIcon>
          <ImBlocked color="#E1E1E3" fontSize="1.5rem" />
        </MenuIcon>
        <MenuDetails>
          <MenuName>Blocked</MenuName>
        </MenuDetails>
      </MenuItem>
      <MenuItem>
        <MenuIcon>
          <MdHelp color="#E1E1E3" fontSize="1.5rem" />
        </MenuIcon>
        <MenuDetails>
          <MenuName>Help</MenuName>
        </MenuDetails>
      </MenuItem>
    </BannerContainer>
  );
}

export default AddContactDrawer;
