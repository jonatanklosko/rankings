import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import clipboard from 'clipboard-polyfill';
import { Redirect } from 'react-router-dom';
import _ from 'lodash';

import WcaApi from '../utils/WcaApi';
import GoogleUrlShortenerApi from '../utils/GoogleUrlShortenerApi';
import EventSelect from './EventSelect';
import RankingTable from './RankingTable';

import events from '../utils/events';

export default class Ranking extends Component {
  constructor(props) {
    super(props);
    const params = new URLSearchParams(this.props.location.search);
    this.state = {
      wcaIds: params.get('wcaids') && params.get('wcaids').split(','),
      name: params.get('name'),
      peopleData: [],
      event: events[0],
      shortUrl: window.location.href, /* Use the long URL until the short one is fetched. */
      redirectPath: null
    }

    this.handleEventChange = this.handleEventChange.bind(this);
    this.copyUrl = this.copyUrl.bind(this);
    this.edit = this.edit.bind(this)
  }

  componentDidMount() {
    WcaApi.getPeopleByWcaIds(this.state.wcaIds)
      .then(peopleData => this.setState({
        peopleData: this.withLocalRanks(peopleData)
      }));
    GoogleUrlShortenerApi.shorten(window.location.href)
      .then(shortUrl => this.setState({ shortUrl }));
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

  copyUrl() {
    clipboard.writeText(this.state.shortUrl);
  }

  edit() {
    this.setState({
      redirectPath: {
        pathname: '/edit',
        state: {
          formState: {
            name: this.state.name,
            people: _.map(this.state.peopleData, 'person')
          }
        }
      }
    });
  }

  render() {
    return this.state.redirectPath ? <Redirect to={this.state.redirectPath} /> : (
      <div style={{ textAlign: 'center' }}>
        <Typography variant="h5">
          {this.state.name}
          <div style={{ display: 'inline-block' }}>
            <Tooltip title="Copy URL" placement="right">
              <IconButton onClick={this.copyUrl}>
                <Icon>link</Icon>
              </IconButton>
            </Tooltip>
            <Tooltip title="Edit" placement="right">
              <IconButton onClick={this.edit}>
                <Icon>edit</Icon>
              </IconButton>
            </Tooltip>
          </div>
        </Typography>
        <EventSelect value={this.state.event} onChange={this.handleEventChange} />
        <RankingTable peopleData={this.state.peopleData} event={this.state.event} />
      </div>
    );
  }
}
