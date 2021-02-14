import { useState } from 'react';

// icons
import { IoArrowBackOutline } from 'react-icons/io5';
import { AiOutlineSearch } from 'react-icons/ai';

// adapters
import { searchContact } from '../../adapters/contacts';

// contexts
import { useProfileDrawerToggle } from '../../contexts/ProfileDrawerContext';

// components
import ContactItem from '../ContactItem';
import NotFound from '../NotFound';
import SectionLoading from '../SectionLoading';

// styles and assets
import { BannerContainer, Header, HeaderText } from '../ProfileDrawer/style';
import { SearchContainer, SearchForm, SearchField } from '../Search/styles';
import displayImage from '../../img/notFound.svg';

function AddContactDrawer() {
  // states
  const [searchEmail, setSearchEmail] = useState();
  const [loading, setLoading] = useState(false);
  const [contact, setContact] = useState();
  const [noContact, setNoContact] = useState(false);

  // context values
  const { addContactDrawer, toggleAddContactDrawer } = useProfileDrawerToggle();

  // method to search for contact
  const handleSearch = (e) => {
    setLoading(true);
    e.preventDefault();
    searchContact(searchEmail)
      .then((doc) => {
        if (doc.exists) {
          setNoContact(false);
          setLoading(false);
          setContact(doc);
        } else {
          setLoading(false);
          setNoContact(true);
        }
      })
      .catch((err) => {
        setLoading(false);
        setNoContact(true);
      });
  };

  return (
    <BannerContainer showDrawer={addContactDrawer}>
      <Header>
        <IoArrowBackOutline
          cursor="pointer"
          color="#E1E1E3"
          fontSize="1.3rem"
          onClick={toggleAddContactDrawer}
        />
        <HeaderText>Add new contact</HeaderText>
      </Header>
      <SearchContainer>
        <SearchForm onSubmit={(e) => handleSearch(e)}>
          <AiOutlineSearch color="#A6A8AA" fontSize="1.2rem" />
          <SearchField
            placeholder="search for contact using their email"
            value={searchEmail}
            onChange={(e) => setSearchEmail(e.currentTarget.value)}
          />
        </SearchForm>
      </SearchContainer>
      {loading ? (
        <SectionLoading />
      ) : contact ? (
        <ContactItem action="addContact" contact={contact} />
      ) : (
        noContact && <NotFound image={displayImage} text="Contact not found" />
      )}
    </BannerContainer>
  );
}

export default AddContactDrawer;
