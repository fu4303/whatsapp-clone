import Header from '../Header';
import Search from '../Search';
import ProfileDrawer from '../ProfileDrawer';
import ContactList from '../ContactList';
import AddContact from '../AddContact';
import Settings from '../Settings';
import CurrentChats from '../CurrentChats';

import { SectionContainer } from './styles';

function Section() {
  return (
    <SectionContainer>
      <Header />
      <Search placeholderText="Search or start new chat" />
      <CurrentChats />
      <ProfileDrawer />
      <ContactList />
      <AddContact />
      <Settings />
    </SectionContainer>
  );
}

export default Section;
