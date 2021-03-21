import React from 'react';
import { GlobalStyle } from '../style/GlobalStyle';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Navbar } from '../Components/Navbar';

import { Register } from './Register';
import { NotFound } from './NotFound';

export function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Register} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
      <GlobalStyle />
    </React.Fragment>
  );
}
