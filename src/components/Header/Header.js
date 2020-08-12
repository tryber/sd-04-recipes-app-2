import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import ProfileIcon from '../../images/profileIcon.svg';
import SearchIcon from '../../images/searchIcon.svg';

const Header = ({ pageTitle, ingredient }) => {
  const [displaySearchBar, setDisplaySearchBar] = useState(false);
  const title = pageTitle === 'Comidas' || pageTitle === 'Bebidas';

  useEffect(() => {
    if (ingredient) {
      setDisplaySearchBar(true);
    }
  }, []);

  return (
    <div>
      <div>
        <Link to="/perfil">
          <img src={ProfileIcon} data-testid="profile-top-btn" alt="Profile icon" />
        </Link>
        <h1 data-testid="page-title" style={{ textTransform: 'capitalize' }}>
          {pageTitle}
        </h1>
        {title && (
          <button type="button" onClick={() => setDisplaySearchBar(!displaySearchBar)}>
            <img src={SearchIcon} data-testid="search-top-btn" alt="Search icon" />
          </button>
        )}
      </div>
      {displaySearchBar && <SearchBar foodType={pageTitle} ingredient={ingredient} />}
    </div>
  );
};

export default Header;

Header.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  ingredient: PropTypes.string.isRequired,
};
