import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import _ from 'lodash';

import Helpers from './helpers';

export default class RankingTable extends Component {
  formattedPersonalBest(personData, format) {
    const eventId = this.props.event.id;
    const result = _.get(personData, `personalRecords.${eventId}.${format}.best`);
    return result ? Helpers.resultToString(result, eventId, format) : '';
  }

  render() {
    return (
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Name</TableCell>
              <TableCell numeric>Single</TableCell>
              <TableCell numeric>Average</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.peopleData
              .filter(personData => personData.personalRecords[this.props.event.id])
              .map((personData, index) => (
                <TableRow key={personData.person.wcaId}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{personData.person.name}</TableCell>
                  <TableCell numeric>{this.formattedPersonalBest(personData, 'single')}</TableCell>
                  <TableCell numeric>{this.formattedPersonalBest(personData, 'average')}</TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}
