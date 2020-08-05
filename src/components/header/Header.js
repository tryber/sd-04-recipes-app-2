import React, { useState } from 'react';
import HeaderContainer from './styles';
import SearchBar from './SearchBar';
import ProfileIcon from '../../images/profileIcon.svg';
import SearchIcon from '../../images/searchIcon.svg';

const Header = ({ pageTitle }) => {
  const [displaySearchBar, setDisplaySearchBar] = useState(false);

  return (
    <HeaderContainer>
      <HeaderContainer.DefaultHeader>
        <HeaderContainer.UserLink to="/perfil">
          <img src={ProfileIcon} alt="Profile icon" />
        </HeaderContainer.UserLink>
        <HeaderContainer.Title>{pageTitle}</HeaderContainer.Title>
        <HeaderContainer.SearchButton onClick={() => setDisplaySearchBar(!displaySearchBar)}>
          <img src={SearchIcon} alt="Search icon" />
        </HeaderContainer.SearchButton>
      </HeaderContainer.DefaultHeader>
      {displaySearchBar && <SearchBar />}
    </HeaderContainer>
  );
};

export default Header;
