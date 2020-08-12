import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const handleValue = (event, setFunction) => {
  setFunction(event.target.value);
};

const validateEmail = (email) => {
  const rgxEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return rgxEmail.test(email);
};

const validatePassword = (password) => password.length >= 6;

const validateInputs = (email, password, setDisabled) => {
  const validatedEmail = validateEmail(email);
  const validatedPassword = validatePassword(password);
  if (validatedEmail && validatedPassword) return setDisabled(false);
  return setDisabled(true);
};

const setLocalStorage = (email) => {
  localStorage.mealsToken = 1;
  localStorage.cocktailsToken = 1;
  localStorage.user = JSON.stringify({ email });
};

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);

  return (
    <div>
      <aside>
        <h1>start cooking!</h1>
        <input
          data-testid="email-input"
          type="email"
          placeholder="Email"
          onChange={(event) => {
            handleValue(event, setEmail);
            validateInputs(email, password, setDisabled);
          }}
        />
        <input
          data-testid="password-input"
          type="password"
          placeholder="Password"
          onChange={(event) => {
            handleValue(event, setPassword);
            validateInputs(email, password, setDisabled);
          }}
        />
        <Link to="/comidas">
          <button
            data-testid="login-submit-btn"
            type="button"
            disabled={disabled}
            onClick={() => setLocalStorage(email)}
          >
            Log in
          </button>
        </Link>
      </aside>
    </div>
  );
};

export default Login;
