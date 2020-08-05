import React, { useState } from 'react';
import PropTypes from 'prop-types';
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
      {displaySearchBar && <SearchBar foodType={pageTitle}/>}
    </HeaderContainer>
  );
};

export default Header;

Header.propTypes = {
  pageTitle: PropTypes.string.isRequired,
};
