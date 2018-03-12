import React, { Component } from 'react';
import Tooltip from 'material-ui/Tooltip';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';

import events from '../utils/events';

export default class EventSelect extends Component {
  render() {
    return (
      <div>
        {events.map(event => (
          <Tooltip title={event.name} placement="top" key={event.id}>
            <IconButton onClick={() => this.props.onChange(event)}>
              <Icon
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
