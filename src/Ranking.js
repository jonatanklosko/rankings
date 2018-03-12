import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import _ from 'lodash';

import WcaApi from './WcaApi';
import EventSelect from './EventSelect';
import RankingTable from './RankingTable';

import events from './events';

export default class Ranking extends Component {
  constructor(props) {
    super(props);
    const params = new URLSearchParams(this.props.location.search);
    this.state = {
      wcaIds: params.get('wcaids') && params.get('wcaids').split(','),
      name: params.get('name'),
      peopleData: [],
      event: events[0]
    }

    this.handleEventChange = this.handleEventChange.bind(this);
  }

  componentDidMount() {
    WcaApi.getPeopleByWcaIds(this.state.wcaIds)
      .then(peopleData => this.setState({
        peopleData: this.withLocalRanks(peopleData)
      }));
  }

  withLocalRanks(peopleData) {
    _.each(events, event => {
      _.each(['single', 'average'], format => {
        const filteredPeopleData = _.filter(peopleData, `personalRecords.${event.id}.${format}`);
        const worldRanks = _.sortBy(_.map(filteredPeopleData, `personalRecords.${event.id}.${format}.worldRank`));
        _.each(filteredPeopleData, ({ personalRecords }) => {
          const record = personalRecords[event.id][format];
          record.localRank = _.indexOf(worldRanks, record.worldRank) + 1;
        })
      });
    });
    return peopleData;
  }

  handleEventChange(event) {
    this.setState({ event });
  }

  render() {
    return (
      <Grid container justify="center">
        <Grid item xs={12} md={8}>
          <Typography variant="headline">{this.state.name}</Typography>
          <EventSelect value={this.state.event} onChange={this.handleEventChange} />
        </Grid>
        <Grid item xs={12} md={8}>
          <RankingTable peopleData={this.state.peopleData} event={this.state.event} />
        </Grid>
      </Grid>
    );
  }
}
