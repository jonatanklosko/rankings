import React, { Component } from 'react';
import Reboot from 'material-ui/Reboot';

import Navigation from './Navigation';

export default class App extends Component {
  render() {
    return (
      <div>
        <Reboot />
        <Navigation />
      </div>
    );
  }
}
