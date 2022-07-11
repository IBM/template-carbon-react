import React, { Component } from 'react';
import { InlineNotification } from '@carbon/react';

class NotFound extends Component {
  render() {
    return (
        <InlineNotification
            title='404'
            subtitle='Not Found'
        />
    );
  }
};

export default NotFound;
