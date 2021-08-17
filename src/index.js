import ReactDOM from 'react-dom'
import React from 'react';
import App from './App';
import { GlobalStyle } from './global';

ReactDOM.render(
  <>
    <App />
    <GlobalStyle />
  </>,
  document.getElementById('root')
);

