import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './page/index';
import reportWebVitals from './reportWebVitals';
import { theme } from './style/Theme';
import { ThemeProvider } from 'styled-components';

import 'rsuite/dist/styles/rsuite-default.css';

import { Provider } from 'react-redux';

import store from './store/store';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
