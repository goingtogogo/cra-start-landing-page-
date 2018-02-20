import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ScrollToTop from './UI/ScrollToTop';

import NotFound from './NotFound';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

const App = () => (
  <BrowserRouter>
    <ScrollToTop>
      <Header />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </ScrollToTop>
  </BrowserRouter>
);
export default App;
