import styled from 'styled-components';
import { Link } from 'react-router-dom';
import AppContainer from '../../styledComponents/appContainer/styles';
import H1 from '../../styledComponents/h1/styles';
import Input from '../../styledComponents/input/styles';
import Button from '../../styledComponents/button/styles';

const LoginContainer = styled(AppContainer)`
  align-items: center;
  justify-content: space-around;
  padding: 0 10% 5%;
`;

LoginContainer.Img = styled.img`
  width: 450px;

  @media (max-width: 800px) {
    width: 600px;
  }
`;

LoginContainer.H1 = styled(H1)``;

LoginContainer.Input = styled(Input)``;

LoginContainer.Link = styled(Link)`
  width: 30vw;
`;

LoginContainer.Button = styled(Button)`
  &:disabled {
    cursor: default;
    opacity: 0.6;
  }
`;

export default LoginContainer;
