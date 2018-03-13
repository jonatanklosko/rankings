import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import { Link } from 'react-router-dom'

export default class Navigation extends Component {
  render() {
    return (
      <Grid container spacing={24}>
        <Grid item>
          <Typography variant="display1">What is it?</Typography>
        </Grid>
        <Grid item>
          <Typography variant="subheading">
            WCA-like rankings created by you!
            Select a group of people and see how they are doing compared to each other.
          </Typography>
        </Grid>
        <Grid item>
          <Button variant="raised" component={Link} to="/edit">
            Go ahead and create one!
          </Button>
        </Grid>
      </Grid>
    );
  }
}
