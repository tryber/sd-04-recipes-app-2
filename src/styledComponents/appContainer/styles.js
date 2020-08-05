import styled from 'styled-components';

const AppContainer = styled.section`
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 50vw;
  padding: 3% 10%;
  margin: 0;

  @media (max-width: 800px) {
    width: 100vw;
  }
`;

export default AppContainer;
