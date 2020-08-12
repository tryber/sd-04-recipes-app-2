import React from 'react';
import { Link } from 'react-router-dom';
import { Header, BottomMenu } from '../../components';

const Profile = () => {
  const user = JSON.parse(localStorage.user);

  return (
    <div>
      <Header pageTitle="Perfil" />
      <p data-testid="profile-email">{user.email}</p>
      <Link to="/receitas-feitas">
        <button type="button" data-testid="profile-done-btn">
          Receitas Feitas
        </button>
      </Link>
      <Link to="/receitas-favoritas">
        <button type="button" data-testid="profile-favorite-btn">
          Receitas Favoritas
        </button>
      </Link>
      <Link to="/">
        <button
          type="button"
          data-testid="profile-logout-btn"
          onClick={() => window.localStorage.clear()}
        >
          Sair
        </button>
      </Link>
      <BottomMenu />
    </div>
  );
};

export default Profile;
