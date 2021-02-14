import { useState, useEffect } from 'react';

// icons
import { IoArrowBackOutline } from 'react-icons/io5';

// adapters
import { db } from '../../adapters/firebase';

// contexts
import { useProfileDrawerToggle } from '../../contexts/ProfileDrawerContext';
import { useAuth } from '../../contexts/AuthContext';

// components
import Search from '../Search';
import ContactItem from '../ContactItem';
import NotFound from '../NotFound';

// styles and assets
import {
  BannerContainer,
  Header,
  HeaderText,
  ContactListContainer,
} from '../ProfileDrawer/style';
import emptyImage from '../../img/empty.svg';

function ContactList() {
  // states
  const [contactList, setContactList] = useState();

  // context values
  const { chatDrawerStatus, toggleChatDrawer } = useProfileDrawerToggle();
  const { currentUser } = useAuth();

  useEffect(() => {
    // get current user contacts list
    let unsubscribe = db
      .collection('Contacts')
      .where('owner', '==', currentUser.email)
      .onSnapshot((snapShot) => {
        setContactList(snapShot.docs);
      });

    return unsubscribe;
  }, [currentUser.email]);

  return (
    <BannerContainer showDrawer={chatDrawerStatus}>
      <Header>
        <IoArrowBackOutline
          cursor="pointer"
          color="#E1E1E3"
          fontSize="1.3rem"
          onClick={toggleChatDrawer}
        />
        <HeaderText>New chat</HeaderText>
      </Header>
      <Search placeholderText="Search contacts" />
      <ContactListContainer>
        {contactList && contactList.length > 0 ? (
          contactList.map((doc) => (
            <ContactItem action="showThread" contact={doc} key={doc.id} />
          ))
        ) : (
          <NotFound image={emptyImage} text="Contact list empty" />
        )}
      </ContactListContainer>
    </BannerContainer>
  );
}

export default ContactList;
