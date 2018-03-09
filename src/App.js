import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Reboot from 'material-ui/Reboot';

import Navigation from './Navigation';
import Home from './Home';
import RankingForm from './RankingForm';
import Ranking from './Ranking';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Reboot />
          <Navigation />

          <Route exact path="/" component={Home}/>
          <Route path="/edit" component={RankingForm}/>
          <Route path="/show" component={Ranking}/>
        </div>
      </Router>
    );
  }
}
