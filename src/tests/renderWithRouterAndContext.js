import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import ContextProvider from '../context/Context';

const renderWithRouterAndContext = (
  ui,
  { route = '/', history = createMemoryHistory({ initialEntries: [route] }) } = {},
) => {
  const Wrapper = ({ children }) => (
    <Router history={history}>
      <ContextProvider>{children}</ContextProvider>
    </Router>
  );
  return {
    ...render(ui, { wrapper: Wrapper }),
    // adding `history` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    history,
  };
};

export default renderWithRouterAndContext;
