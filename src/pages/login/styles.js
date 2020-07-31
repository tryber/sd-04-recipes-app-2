import styled from 'styled-components';
import { AppContainer } from '../../components/appContainer/styles';
import { H1 } from '../../components/h1/styles';
import { Input } from '../../components/input/styles';
import { Button } from '../../components/button/styles';

export const LoginContainer = styled(AppContainer)`
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

LoginContainer.Button = styled(Button)``;
