import styled from 'styled-components';

export const AppContainer = styled.section`
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 3% 10%;

  @media (max-width: 800px) {
    width: 100vw;
  }
`;