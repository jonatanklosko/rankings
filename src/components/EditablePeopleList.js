import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
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
        <List dense style={{ maxHeight: 200, overflow: 'auto' }}>
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
