import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import { MenuItem } from 'material-ui/Menu';
import { ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Downshift from 'downshift';
import _ from 'lodash';

import WcaApi from './WcaApi';

export default class WcaPersonSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peopleFound: []
    };

    this.findPeopleDebounced = _.debounce(this.findPeople.bind(this), 300);
  }

  findPeople(query) {
    if (query) {
      WcaApi.searchPeople(query)
        .then(people => this.setState({ peopleFound: _.take(people, 5) }));
    } else {
      this.setState({ peopleFound: [] });
    }
  }

  render() {
    return (
      <Downshift
        onChange={person => alert(_.get(person, 'name'))}
        itemToString={person => _.get(person, 'name', '')}
        onInputValueChange={this.findPeopleDebounced}
      >
        {({ getInputProps, getItemProps, isOpen, inputValue, highlightedIndex }) => (
          <div>
            <TextField {...getInputProps({ fullWidth: true, label: 'Person' })} />
            {isOpen && (
              <Paper square>
                {this.state.peopleFound.map((person, index) => (
                  <MenuItem {...getItemProps({
                    item: person,
                    selected: highlightedIndex === index,
                    key: person.id
                  })}>
                    <Avatar src={person.avatar.thumbUrl} />
                    <ListItemText primary={person.name} secondary={person.wcaId} />
                  </MenuItem>
                ))
                }
              </Paper>
            )}
          </div>
        )}
      </Downshift>
    );
  }
}
