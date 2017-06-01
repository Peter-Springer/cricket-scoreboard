import React, { Component } from 'react';
import logo from './logo.svg';
import './reset.css';
import './App.css';
import Scoreboard from './Scoreboard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [20, 19, 18, 17, 16, 15, 'Bull']
    }
  }

  buildBoards() {
    return this.state.rows.map(e => (
      <div key={e} className='scoreboard-row'>
          <Scoreboard/>
        <div>
          <p className='row-number'>{e}</p>
        </div>
          <Scoreboard/>
      </div>
    ))
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>React-Cricket-Scoreboard</h1>
        </div>
        <h3>Click a Space Invader to mark a hit!</h3>
        <div className='players-container'>
          <input className='player-one' placeholder='player 1'/>
          <p>VS</p>
          <input className='player-two' placeholder='player 2'/>
        </div>
        <div className='scoreboard-container'>
          {this.buildBoards()}
        </div>
      </div>
    )
  }
}

export default App;
