import React from 'react';

const Login = () => {
  return (
    <div>
      <h2>Login</h2>
      <input data-testid="email-input" type="email" />
      <input data-testid="password-input" type="text" />
      <button data-testid="login-submit-btn" type="button">Login</button>
    </div>
  );
};

export default Login;
