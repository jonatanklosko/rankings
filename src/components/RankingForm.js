import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import { Redirect } from 'react-router-dom';
import _ from 'lodash';

import EditablePeopleList from './EditablePeopleList';

export default class RankingForm extends Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({}, {
      name: '',
      people: [],
      redirectPath: null
    }, props.location.state.formState);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePeopleChange = this.handlePeopleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      redirectPath: `/show?name=${this.state.name}&wcaids=${_.map(this.state.people, 'wcaId').join(',')}`
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
              <Button type="submit" variant="raised" color="secondary">Done</Button>
            </Grid>
          </Grid>
        </form>
      </div>
    );
  }
}
