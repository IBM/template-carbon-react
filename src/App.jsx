import React, { Component } from 'react';
import UIShell from './content/UIShell/UIShell';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <UIShell />
      </div>
    );
  }
}

export default App;
