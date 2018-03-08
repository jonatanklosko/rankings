import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';

import EditablePeopleList from './EditablePeopleList';

export default class RankingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      people: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePeopleChange = this.handlePeopleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handlePeopleChange(people) {
    this.setState({ people });
  }

  render() {
    return (
      <Grid container justify="center">
        <Grid item xs={12} sm={6}>
          <Typography variant="headline">Edit ranking</Typography>
          <form onSubmit={this.handleSubmit}>
            <Grid container direction="column">
              <Grid item>
                <TextField fullWidth label="Ranking name" value={this.state.name} onChange={this.handleNameChange} />
              </Grid>
              <Grid item>
                <Typography variant="subheading">People</Typography>
                <EditablePeopleList people={this.state.people} onChange={this.handlePeopleChange} />
              </Grid>
              <Grid item>
                <Button type="submit" variant="raised" color="primary">Done</Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    );
  }
}
