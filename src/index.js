import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import { createGlobalStyle } from 'styled-components';
import avenir from './assets/AvenirLTStd-Roman.otf';

const AvenirFont = createGlobalStyle`
  @font-face {
      font-family: Avenir;
      src: url(${avenir}) format('opentype');
      font-weight: normal;
      font-style: normal;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AvenirFont />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
