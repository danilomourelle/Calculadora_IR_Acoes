import React from 'react';
import ReactDOM from 'react-dom';

import { createGlobalStyle } from 'styled-components'
import { Provider } from 'react-redux'

import App from './App';
import store from './Store/Store';

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing:border-box;
  }
`

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById('root'));


