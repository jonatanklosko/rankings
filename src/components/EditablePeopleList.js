import React, { PureComponent } from 'react';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import Paper from '@material-ui/core/Paper';
import _ from 'lodash';

import WcaPersonSelect from './WcaPersonSelect';

export default class EditablePeopleList extends PureComponent {
  onPersonAdded(person) {
    this.props.onChange(_.uniqBy([...this.props.people, person], 'wcaId'));
  }

  onPersonRemoved(person) {
    this.props.onChange(_.reject(this.props.people, { wcaId: person.wcaId }));
  }

  render() {
    return (
      <Paper elevation={1} style={{ padding: 8 }}>
        <Grid container spacing={8}>
          <Grid item xs={12}>
            <WcaPersonSelect fullWidth label="Add person" clearOnChange onChange={person => this.onPersonAdded(person)} />
          </Grid>
          <Grid item xs={12}>
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
          </Grid>
        </Grid>
      </Paper>
    );
  }
}
