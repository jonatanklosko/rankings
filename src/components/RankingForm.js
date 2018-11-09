import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Redirect } from 'react-router-dom';
import _ from 'lodash';

import EditablePeopleList from './EditablePeopleList';

export default class RankingForm extends Component {
  constructor(props) {
    super(props);
    /* If there is a state passed from another component, read it. */
    this.state = Object.assign({}, {
      name: '',
      people: [],
      redirectPath: null
    }, _.get(props, 'location.state.formState'));

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePeopleChange = this.handlePeopleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      redirectPath: `/show?name=${encodeURIComponent(this.state.name)}&wcaids=${_.map(this.state.people, 'wcaId').join(',')}`
    });
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handlePeopleChange(people) {
    this.setState({ people });
  }

  render() {
    return this.state.redirectPath ? <Redirect to={this.state.redirectPath} /> : (
      <div>
        <Typography variant="h5">Edit ranking</Typography>
        <form onSubmit={this.handleSubmit}>
          <Grid container direction="column" spacing={16}>
            <Grid item>
              <TextField fullWidth label="Ranking name" value={this.state.name} onChange={this.handleNameChange} />
            </Grid>
            <Grid item>
              <Typography variant="subtitle2" style={{ marginBottom: 8 }}>
                People
              </Typography>
              <EditablePeopleList people={this.state.people} onChange={this.handlePeopleChange} />
            </Grid>
            <Grid item>
              <Button type="submit" variant="outlined">Done</Button>
            </Grid>
          </Grid>
        </form>
      </div>
    );
  }
}
