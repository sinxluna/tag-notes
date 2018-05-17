import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './main.css';

import TagNote from './tagnote';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title titleColor">Welcome to Tag Notes</h1>
        </header>
      <TagNote />
      </div>
    );
  }
}

export default App;
