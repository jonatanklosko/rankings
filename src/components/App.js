import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import blueGrey from '@material-ui/core/colors/blueGrey';

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
      <Router basename={process.env.PUBLIC_URL}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Navigation />
          <Grid container justify="center">
            <Grid item xs={12} md={8} style={{ padding: 16 }}>
              <Route exact path="/" component={Home}/>
              <Route path="/edit" component={RankingForm}/>
              <Route path="/show" component={Ranking}/>
            </Grid>
          </Grid>
        </MuiThemeProvider>
      </Router>
    );
  }
}
