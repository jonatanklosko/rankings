import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import { Link } from 'react-router-dom';

export default class Navigation extends Component {
  render() {
    return (
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="title" color="inherit" style={{ flexGrow: 1 }}>
            <Link to="/">Rankings</Link>
          </Typography>
          <IconButton component="a" href="https://github.com/jonatanklosko/rankings" target="_blank">
            <img src="https://png.icons8.com/ios-glyphs/32/ffffff/github.png" alt="GitHub" />
          </IconButton>
        </Toolbar>
      </AppBar>
    );
  }
}
