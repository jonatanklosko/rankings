import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Downshift from 'downshift';
import _ from 'lodash';

import { searchPeople } from '../logic/wca-api';
import './WcaPersonSelect.css';

export default class WcaPersonSelect extends Component {
  state = {
    peopleFound: []
  };

  constructor(props) {
    super(props);
    this.findPeopleDebounced = _.debounce(this.findPeople, 300);
  }

  findPeople = query => {
    if (query) {
      searchPeople(query).then(people => this.setState({ peopleFound: people }));
    } else {
      this.setState({ peopleFound: [] });
    }
  };

  handleChange = (person, { clearSelection }) => {
    const { onChange, clearOnChange } = this.props;
    person && onChange(person);
    clearOnChange && clearSelection();
  };

  render() {
    const { fullWidth, label } = this.props;

    return (
      <Downshift
        onChange={this.handleChange}
        itemToString={person => _.get(person, 'name', '')}
        onInputValueChange={this.findPeopleDebounced}
      >
        {({ getInputProps, getItemProps, isOpen, inputValue, highlightedIndex }) => (
          <div className="wca-person-select">
            <TextField {...getInputProps({ fullWidth, label })} />
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
