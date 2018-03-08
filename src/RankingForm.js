import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

export default class RankingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
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

  render() {
    return (
      <form className="ranking-form" onSubmit={this.handleSubmit}>
        <TextField
          label="Ranking name"
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <div>
          <Button type="submit" variant="raised" color="primary">Done</Button>
        </div>
      </form>
    );
  }
}
