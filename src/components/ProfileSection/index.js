import { IoCloseSharp } from 'react-icons/io5';
import { ImBlocked } from 'react-icons/im';
import { FaThumbsDown } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import defaultProfile from '../../img/profile.jpg';

import {
  ProfileContainer,
  SectionTitle,
  ProfileDetailContainer,
  ProfileImage,
  ProfileName,
  AboutContainer,
  AboutEmail,
  AboutText,
  AboutTitle,
  ActionText,
  ProfileAction,
  DangerText,
  ContainerItems,
} from './styles';

import { HeaderContainer, ProfileImageContainer } from '../Header/styles';

import { useProfileDrawerToggle } from '../../contexts/ProfileDrawerContext';
import { useChatContext } from '../../contexts/CurrentChat';

function ProfileSection() {
  const { showProfileDrawer, toggleProfileDrawer } = useProfileDrawerToggle();
  const { currentContact } = useChatContext();

  return (
    <ProfileContainer drawerStatus={showProfileDrawer}>
      <HeaderContainer>
        <ProfileImageContainer>
          <IoCloseSharp
            onClick={toggleProfileDrawer}
            cursor="pointer"
            color="#A6A8AA"
            fontSize="1.5rem"
          />
          <SectionTitle>Contact Info</SectionTitle>
        </ProfileImageContainer>
      </HeaderContainer>

      <ContainerItems>
        <ProfileDetailContainer>
          <ProfileImage
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
          <ProfileName>
            {currentContact
              ? currentContact.data().contactName ||
                currentContact.data().displayName
                ? currentContact.data().contactName ||
                  currentContact.data().displayName
                : currentContact.data().contactEmail || currentContact.id
              : null}
          </ProfileName>
        </ProfileDetailContainer>

        <AboutContainer>
          <AboutTitle>About and email address</AboutTitle>
          <AboutText>
            {currentContact
              ? currentContact.data().contactAbout ||
                currentContact.data().about
                ? currentContact.data().contactAbout ||
                  currentContact.data().about
                : null
              : null}
          </AboutText>
          <AboutEmail>
            {currentContact &&
              (currentContact.data().contactEmail || currentContact.id)}
          </AboutEmail>
        </AboutContainer>

        <ProfileAction>
          <ImBlocked color="#A6A8AA" fontSize="1.3rem" />
          <ActionText>Block</ActionText>
        </ProfileAction>

        <ProfileAction>
          <FaThumbsDown color="#EF697A" fontSize="1.3rem" />
          <DangerText>Report contact</DangerText>
        </ProfileAction>

        <ProfileAction>
          <MdDelete color="#EF697A" fontSize="1.3rem" />
          <DangerText>Delete chat</DangerText>
        </ProfileAction>
      </ContainerItems>
    </ProfileContainer>
  );
}

export default ProfileSection;
