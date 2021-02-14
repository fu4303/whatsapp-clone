import { useState, useEffect } from 'react';

import { IoArrowBackOutline } from 'react-icons/io5';
import { AiFillCamera } from 'react-icons/ai';
import { MdModeEdit } from 'react-icons/md';

import ReactLoading from 'react-loading';

import {
  BannerContainer,
  Header,
  HeaderText,
  ImageContainer,
  ProfileImage,
  EditOverlay,
  EditPhotoText,
  DetailContainer,
  DetailDesc,
  DetailForm,
  DetailInput,
  DetailLabel,
  DetailTitle,
  ImageInput,
} from './style';

import { useProfileDrawerToggle } from '../../contexts/ProfileDrawerContext';
import { useAuth } from '../../contexts/AuthContext';
import { auth } from '../../adapters/firebase';
import { updateAbout, getProfile } from '../../adapters/updateProfile';

import defaultProfile from '../../img/profile.jpg';

function ProfileDrawer() {
  const [displayName, setDisplayName] = useState();
  const [about, setAbout] = useState();
  const [loading, setLoading] = useState(false);
  const [picLoading, setPicLoading] = useState(false);
  const [aboutLoading, setAboutLoading] = useState(false);

  const { drawerStatus, toggleDrawer } = useProfileDrawerToggle();
  const { currentUser, updateDisplayName, updateProfilePic } = useAuth();

  useEffect(() => {
    setDisplayName(currentUser.displayName);
    getProfile(currentUser.email)
      .then((doc) => setAbout(doc.data().about))
      .catch(console.error('something went wrong'));
  }, [currentUser.email, currentUser.displayName]);

  const handleDisplayName = (e) => {
    e.preventDefault();
    setLoading(true);
    updateDisplayName(displayName)
      .then(() => {
        // console.log(displayName);
        setLoading(false);
        setDisplayName(auth.currentUser.displayName);
      })
      .catch((err) => console.error(err));
  };

  const handleImageUpload = (e) => {
    e.preventDefault();
    setPicLoading(true);
    const file = e.target.files[0];
    updateProfilePic(file)
      .then(() => {
        setPicLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleAbout = (e) => {
    e.preventDefault();
    setAboutLoading(true);
    updateAbout(currentUser.email, about)
      .then(() => {
        setAboutLoading(false);
      })
      .catch((err) => console.error(err));
  };

  return (
    <BannerContainer showDrawer={drawerStatus}>
      <Header>
        <IoArrowBackOutline
          cursor="pointer"
          color="#E1E1E3"
          fontSize="1.3rem"
          onClick={toggleDrawer}
        />
        <HeaderText>Profile</HeaderText>
      </Header>
      <ImageContainer>
        <ProfileImage
          src={currentUser.photoURL ? currentUser.photoURL : defaultProfile}
        />
        <ImageInput
          onChange={(e) => handleImageUpload(e)}
          type="file"
          id="profilePic"
        />
        <EditOverlay htmlFor="profilePic">
          {picLoading ? (
            <ReactLoading type="spin" color="#009688" />
          ) : (
            <>
              <AiFillCamera color="#ffffff" fontSize="2rem" />
              <EditPhotoText>Add profile photo</EditPhotoText>
            </>
          )}
        </EditOverlay>
      </ImageContainer>
      <DetailContainer>
        <DetailTitle>Your Name</DetailTitle>
        <DetailForm onSubmit={(e) => handleDisplayName(e)}>
          <DetailInput
            id="displayName"
            type="text"
            value={displayName ? displayName : null}
            onChange={(e) => setDisplayName(e.currentTarget.value)}
          />
          <DetailLabel htmlFor="displayName">
            {loading ? (
              <ReactLoading
                color="#009688"
                type="spin"
                width="1.2rem"
                height="1.2rem"
              />
            ) : (
              <MdModeEdit color="#A6A8AA" fontSize="1.2rem" />
            )}
          </DetailLabel>
        </DetailForm>
        <DetailDesc>
          This is not your username or pin. This name will be visible to your
          WhatsApp contacts
        </DetailDesc>
      </DetailContainer>
      <DetailContainer>
        <DetailTitle>About</DetailTitle>
        <DetailForm onSubmit={handleAbout}>
          <DetailInput
            onChange={(e) => setAbout(e.currentTarget.value)}
            id="about"
            type="text"
            value={about}
          />
          <DetailLabel htmlFor="about">
            {aboutLoading ? (
              <ReactLoading
                color="#009688"
                type="spin"
                width="1.2rem"
                height="1.2rem"
              />
            ) : (
              <MdModeEdit color="#A6A8AA" fontSize="1.2rem" />
            )}
          </DetailLabel>
        </DetailForm>
      </DetailContainer>
    </BannerContainer>
  );
}

export default ProfileDrawer;
