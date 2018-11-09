import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

export default class Navigation extends Component {
  render() {
    return (
      <Grid container spacing={24}>
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
          <Button variant="outlined" component={Link} to="/edit">
            Go ahead and create one!
          </Button>
        </Grid>
      </Grid>
    );
  }
}
