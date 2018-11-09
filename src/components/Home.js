import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom';

import Helpers from '../utils/helpers';

export default class Navigation extends Component {
  state = {
    redirectPath: null
  };

  importPeople = () => {
    this.fileInput.click();
  };

  handleFileChange = event => {
    if (event.target.files.length > 0) {
      Helpers.readWcaIdsFromFile(event.target.files[0])
        .then(wcaIds =>
          this.setState({
            redirectPath: `/edit?wcaids=${wcaIds.join(',')}`
          })
        );
    }
  };

  render() {
    return this.state.redirectPath ? <Redirect to={this.state.redirectPath} /> : (
      <Grid container spacing={24} justify="center">
        <Grid item>
          <Typography variant="h4">What is it?</Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1">
            WCA-like rankings created by you!
            Select a group of people and see how they are doing compared to each other.
          </Typography>
        </Grid>
        <Grid item>
          <Grid container spacing={8}>
            <Grid item>
              <Button variant="outlined" component={Link} to="/edit">
                Go ahead and create one!
              </Button>
            </Grid>
            <input type="file" style={{ display: 'none' }} ref={input => this.fileInput = input} onChange={this.handleFileChange} />
            <Grid item>
              <Button variant="outlined" onClick={this.importPeople}>
                Import people from file
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
