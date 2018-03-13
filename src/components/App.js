import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Reboot from 'material-ui/Reboot';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import blue from 'material-ui/colors/blue';
import blueGrey from 'material-ui/colors/blueGrey';

import Navigation from './Navigation';
import Home from './Home';
import RankingForm from './RankingForm';
import Ranking from './Ranking';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: blueGrey,
  },
});

export default class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider theme={theme}>
          <Reboot />
          <Navigation />

          <Route exact path="/" component={Home}/>
          <Route path="/edit" component={RankingForm}/>
          <Route path="/show" component={Ranking}/>
        </MuiThemeProvider>
      </Router>
    );
  }
}
