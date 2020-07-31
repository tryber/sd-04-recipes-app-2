import React from 'react';
import LoginContainer from './styles';
import CoverPic from '../../images/cover-pic.jpeg';

const Login = () => (
  <LoginContainer>
    <LoginContainer.Img src={CoverPic} />
    <LoginContainer.H1>{"Let's start cooking"}!</LoginContainer.H1>
    <LoginContainer.Input data-testid="email-input" type="email" placeholder="Email" />
    <LoginContainer.Input data-testid="password-input" type="text" placeholder="Password" />
    <LoginContainer.Button data-testid="login-submit-btn" type="button">
      Log in
    </LoginContainer.Button>
  </LoginContainer>
);

export default Login;
