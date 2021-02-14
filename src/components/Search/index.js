import { AiOutlineSearch } from 'react-icons/ai';

import { SearchContainer, SearchForm, SearchField } from './styles';

function SearchBar({ placeholderText }) {
  return (
    <SearchContainer>
      <SearchForm>
        <AiOutlineSearch color="#A6A8AA" fontSize="1.2rem" />
        <SearchField placeholder={placeholderText} />
      </SearchForm>
    </SearchContainer>
  );
}

export default SearchBar;
