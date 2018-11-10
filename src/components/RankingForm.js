import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Redirect } from 'react-router-dom';
import _ from 'lodash';

import { getPeopleByWcaIds } from '../logic/wca-api';
import { rankingFromSearchParams, rankingToSearchParams } from '../logic/url-utils';

import EditablePeopleList from './EditablePeopleList';

export default class RankingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ranking: rankingFromSearchParams(props.location.search),
      people: [],
      redirectPath: null,
      loading: true
    };
  }

  componentDidMount() {
    getPeopleByWcaIds(this.state.ranking.wcaIds)
      .then(peopleData => this.setState({
        loading: false,
        people: _.map(peopleData, 'person')
      }));
  }

  handleSubmit = event => {
    event.preventDefault();
    const { ranking, people } = this.state;
    this.setState({
      redirectPath: '/show?' + rankingToSearchParams({ name: ranking.name, wcaIds: _.map(people, 'wcaId') })
    });
  };

  handleNameChange = event => {
    const { ranking } = this.state;
    this.setState({
      ranking: { ...ranking, name: event.target.value }
    });
  };

  handlePeopleChange = people => {
    this.setState({ people });
  };

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
