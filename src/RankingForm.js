import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import _ from 'lodash';

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
    this.addPerson = this.addPerson.bind(this);
    this.removePerson = this.removePerson.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  addPerson(person) {
    this.setState({
      people: _.uniqBy([...this.state.people, person], 'wcaId')
    });
  }

  removePerson(person) {
    this.setState({
      people: _.reject(this.state.people, { wcaId: person.wcaId })
    })
  }

  render() {
    return (
      <Grid container justify="center">
        <Grid item xs={12} sm={6}>
          <Typography variant="headline">Edit ranking</Typography>
          <form className="ranking-form" onSubmit={this.handleSubmit}>
            <Grid container direction="column">
              <Grid item>
                <TextField
                  fullWidth
                  label="Ranking name"
                  value={this.state.name}
                  onChange={this.handleNameChange}
                />
              </Grid>
              <Grid item>
                <Typography variant="subheading">People</Typography>
                <EditablePeopleList people={this.state.people} onPersonAdded={this.addPerson} onPersonRemoved={this.removePerson} />
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
