import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './pages';
import GlobalStyle from './styles/global';


function App() {
  return (
    <>
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>    
      <GlobalStyle />
    </>
  );
}

export default App;
