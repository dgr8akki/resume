import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './landingPage';
import js30HomePage from './js30HomePage';

class Pages extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/js30" component={js30HomePage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Pages;
