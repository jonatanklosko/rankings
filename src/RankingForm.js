import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import Typography from 'material-ui/Typography';
import _ from 'lodash';

import WcaPersonSelect from './WcaPersonSelect';

export default class RankingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      people: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  addPerson(person) {
    this.setState({
      people: _.uniqBy([...this.state.people, person], 'wcaId')
    });
  }

  removePerson(person) {
    this.setState({
      people: _.reject(this.state.people, { wcaId: person.wcaId })
    })
  }

  render() {
    return (
      <form className="ranking-form" onSubmit={this.handleSubmit}>
        <TextField
          label="Ranking name"
          value={this.state.name}
          onChange={this.handleNameChange}
        />
      <Typography variant="subheading">People</Typography>
        <List dense>
          {this.state.people.map(person => (
            <ListItem key={person.wcaId}>
              <Avatar src={person.avatar.thumbUrl} />
              <ListItemText primary={person.name} />
              <ListItemSecondaryAction>
                <IconButton onClick={() => this.removePerson(person)}>
                  <Icon>delete</Icon>
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
        <WcaPersonSelect label="Add person" onChange={person => this.addPerson(person)} />
        <div>
          <Button type="submit" variant="raised" color="primary">Done</Button>
        </div>
      </form>
    );
  }
}
