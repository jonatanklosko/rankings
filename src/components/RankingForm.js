import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Redirect } from 'react-router-dom';
import _ from 'lodash';

import { getPeopleByWcaIds } from '../logic/wca-api';
import { rankingFromSearchParams } from '../logic/utils';

import EditablePeopleList from './EditablePeopleList';

export default class RankingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ranking: rankingFromSearchParams(this.props.location.search),
      people: [],
      redirectPath: null,
      loading: true
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePeopleChange = this.handlePeopleChange.bind(this);
  }

  componentDidMount() {
    getPeopleByWcaIds(this.state.ranking.wcaIds)
      .then(peopleData => this.setState({
        loading: false,
        people: _.map(peopleData, 'person')
      }));
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      redirectPath: `/show?name=${encodeURIComponent(this.state.ranking.name)}&wcaids=${_.map(this.state.people, 'wcaId').join(',')}`
    });
  }

  handleNameChange(event) {
    const { ranking } = this.state;
    this.setState({
      ranking: { ...ranking, name: event.target.value }
    });
  }

  handlePeopleChange(people) {
    this.setState({ people });
  }

  render() {
    const { redirectPath, ranking, people, loading } = this.state;

    return redirectPath ? <Redirect to={redirectPath} /> : (
      <div>
        <Typography variant="h5">Edit ranking</Typography>
        <form onSubmit={this.handleSubmit}>
          <Grid container direction="column" spacing={16}>
            <Grid item>
              <TextField fullWidth label="Ranking name" value={ranking.name} onChange={this.handleNameChange} />
            </Grid>
            <Grid item>
              <Typography variant="subtitle2" style={{ marginBottom: 8 }}>
                People
              </Typography>
              {loading ? <LinearProgress /> : (
                <EditablePeopleList people={people} onChange={this.handlePeopleChange} />
              )}
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
