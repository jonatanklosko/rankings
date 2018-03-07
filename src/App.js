import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Reboot from 'material-ui/Reboot';

import Navigation from './Navigation';
import Home from './Home';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Reboot />
          <Navigation />

          <Route exact path="/" component={Home}/>
        </div>
      </Router>
    );
  }
}
