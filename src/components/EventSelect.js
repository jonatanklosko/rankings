import React, { Component } from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';

import events from '../utils/events';

export default class EventSelect extends Component {
  render() {
    return (
      <div>
        {events.map(event => (
          <Tooltip title={event.name} placement="top" key={event.id}>
            <IconButton onClick={() => this.props.onChange(event)}>
              <span
                className={`cubing-icon ${event.icon}`}
                style={{ opacity: event.id === this.props.value.id ? 1 : 0.3 }}
              />
            </IconButton>
          </Tooltip>
        ))}
      </div>
    );
  }
}
