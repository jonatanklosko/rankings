import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import _ from 'lodash';

import './RankingTable.css';
import { resultToString } from '../logic/utils';

export default class RankingTable extends Component {
  state = {
    format: 'single'
  };

  setFormat(format) {
    this.setState({ format });
  }

  formattedPersonalBest(personData, format) {
    const { event } = this.props;
    const result = _.get(personData, `personalRecords.${event.id}.${format}.best`);
    return result ? resultToString(result, event.id, format) : '';
  }

  peopleDataForEvent() {
    const { event, peopleData } = this.props;
    const { format } = this.state;
    return _(peopleData)
      .filter(`personalRecords.${event.id}.${format}`)
      .orderBy([`personalRecords.${event.id}.${format}.localRank`])
      .value();
  }

  render() {
    const { format } = this.state;

    return (
      <div className="ranking-table-container">
        <Table className={`sort-by-${format}`}>
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
            {this.peopleDataForEvent().map(personData => (
              <TableRow key={personData.person.wcaId}>
                <TableCell padding="dense">
                  {personData.personalRecords[this.props.event.id][format].localRank}
                </TableCell>
                <TableCell>
                  <a href={personData.person.url} target="_blank" rel="noopener noreferrer">{personData.person.name}</a>
                </TableCell>
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
      </div>
    );
  }
}
