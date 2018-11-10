import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Downshift from 'downshift';
import _ from 'lodash';

import './WcaPersonSelect.css';
import { searchPeople } from '../logic/wca-api';

export default class WcaPersonSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peopleFound: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.findPeopleDebounced = _.debounce(this.findPeople.bind(this), 300);
  }

  findPeople(query) {
    if (query) {
      searchPeople(query).then(people => this.setState({ peopleFound: people }));
    } else {
      this.setState({ peopleFound: [] });
    }
  }

  handleChange(person, { clearSelection }) {
    person && this.props.onChange(person);
    this.props.clearOnChange && clearSelection();
  }

  render() {
    return (
      <Downshift
        onChange={this.handleChange}
        itemToString={person => _.get(person, 'name', '')}
        onInputValueChange={this.findPeopleDebounced}
      >
        {({ getInputProps, getItemProps, isOpen, inputValue, highlightedIndex }) => (
          <div className="wca-person-select">
            <TextField {...getInputProps({ fullWidth: this.props.fullWidth, label: this.props.label })} />
            {isOpen && (
              <Paper square className="options-list">
                {this.state.peopleFound.map((person, index) => (
                  <MenuItem {...getItemProps({
                    item: person,
                    selected: highlightedIndex === index,
                    key: person.id
                  })}>
                    <Avatar src={person.avatar.thumbUrl} />
                    <ListItemText primary={person.name} secondary={person.wcaId} />
                  </MenuItem>
                ))}
              </Paper>
            )}
          </div>
        )}
      </Downshift>
    );
  }
}
