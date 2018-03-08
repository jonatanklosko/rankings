import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
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
    this.handlePersonSelectChange = this.handlePersonSelectChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handlePersonSelectChange(person) {
    this.setState({ people: _.uniqBy([...this.state.people, person], 'wcaId') });
  }

  render() {
    return (
      <form className="ranking-form" onSubmit={this.handleSubmit}>
        <TextField
          label="Ranking name"
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <WcaPersonSelect onChange={this.handlePersonSelectChange} />
        <div>
          <Button type="submit" variant="raised" color="primary">Done</Button>
        </div>
      </form>
    );
  }
}
