import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>    
      <GlobalStyle />
    </>
  );
}

export default App;
