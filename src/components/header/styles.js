import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import ProfileIcon from '../../images/profileIcon.svg';
// import SearchIcon from '../../images/searchIcon.svg';

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
`;

HeaderContainer.DefaultHeader = styled.div`
  align-items: center;
  background-color: var(--primary);
  display: flex;
  height: 10vh;
  justify-content: space-between;
  padding: 10px 20px;
`;

HeaderContainer.UserLink = styled(Link)`
  background-color: var(--primary);
  border: 0;
  cursor: pointer;
  height: 90%;
`;

HeaderContainer.Title = styled.h1`
  color: var(--black);
`;

HeaderContainer.SearchButton = styled.button`
  background-color: var(--primary);
  border: 0;
  cursor: pointer;
  height: 90%;
`;

export default HeaderContainer;
