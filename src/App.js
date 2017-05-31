import React, { Component } from 'react';
import logo from './logo.svg';
import './reset.css';
import './App.css';

class App extends Component {
constructor(props) {
  super(props);
  this.state = {
    count: 1
  };
}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Cricket Scoreboard</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className='hit-container'>
          <span>/</span>
        </div>
        <div className='hit-container'>
          <span>X</span>
        </div>
        <div className='closed-container'>
          <span>X</span>
        </div>
      </div>
    );
  }
}

export default App;
