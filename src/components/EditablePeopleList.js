import React, { Component } from 'react';
import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import _ from 'lodash';

import WcaPersonSelect from './WcaPersonSelect';

export default class EditablePeopleList extends Component {
  onPersonAdded(person) {
    this.props.onChange(_.uniqBy([...this.props.people, person], 'wcaId'));
  }

  onPersonRemoved(person) {
    this.props.onChange(_.reject(this.props.people, { wcaId: person.wcaId }));
  }

  render() {
    return (
      <div>
        <List dense>
          {this.props.people.map(person => (
            <ListItem key={person.wcaId}>
              <Avatar src={person.avatar.thumbUrl} />
              <ListItemText primary={person.name} />
              <ListItemSecondaryAction>
                <IconButton onClick={() => this.onPersonRemoved(person)}>
                  <Icon>delete</Icon>
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
        <WcaPersonSelect fullWidth label="Add person" clearOnChange onChange={person => this.onPersonAdded(person)} />
      </div>
    );
  }
}
