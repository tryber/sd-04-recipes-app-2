import React from 'react';
import './App.css';

import Routes from './Routes';
import ContextProvider from './context/Context';

function App() {
  return (
    <ContextProvider id="meals">
      <Routes />
    </ContextProvider>
  );
}

export default App;
