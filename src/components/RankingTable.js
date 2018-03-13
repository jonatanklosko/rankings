import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import _ from 'lodash';

import './RankingTable.css';
import Helpers from '../utils/helpers';

export default class RankingTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      format: 'single'
    };
  }

  setFormat(format) {
    this.setState({ format });
  }

  formattedPersonalBest(personData, format) {
    const eventId = this.props.event.id;
    const result = _.get(personData, `personalRecords.${eventId}.${format}.best`);
    return result ? Helpers.resultToString(result, eventId, format) : '';
  }

  peopleData() {
    const eventId = this.props.event.id;
    return _(this.props.peopleData)
      .filter(`personalRecords.${eventId}.${this.state.format}`)
      .orderBy([`personalRecords.${eventId}.${this.state.format}.localRank`])
      .value();
  }

  render() {
    return (
      <Paper className="ranking-table-container">
        <Table className={`sort-by-${this.state.format}`}>
          <TableHead className="ranking-table-head">
            <TableRow>
              <TableCell padding="dense"></TableCell>
              <TableCell>Name</TableCell>
              <TableCell numeric className="single" onClick={() => this.setFormat('single')}>
                Single
              </TableCell>
              <TableCell numeric className="average" onClick={() => this.setFormat('average')}>
                Average
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.peopleData().map(personData => (
              <TableRow key={personData.person.wcaId}>
                <TableCell padding="dense">
                  {personData.personalRecords[this.props.event.id][this.state.format].localRank}
                </TableCell>
                <TableCell>{personData.person.name}</TableCell>
                <TableCell numeric className="single">
                  {this.formattedPersonalBest(personData, 'single')}
                </TableCell>
                <TableCell numeric className="average">
                  {this.formattedPersonalBest(personData, 'average')}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}
