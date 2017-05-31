import React, { Component } from 'react';
import logo from './logo.svg';
import './reset.css';
import './App.css';
import Scoreboard from './Scoreboard';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Cricket Scoreboard</h2>
        </div>
        <div className='scoreboard-row'>
            <Scoreboard/>
          <div>
            <p className='row-number'>15</p>
          </div>
            <Scoreboard/>
        </div>
      </div>
    );
  }
}

export default App;

// this.state = {
//   rows: Array.from({ length: 13 }).map((e, i) => i + 1).reverse
// }
// buildBoards() {
//   return this.state.rows.map(e => (
//         <Scoreboard/>
//           <div>
//             <p className='row-number'>e</p>
//           </div>
//   ))
// }
// const ROW_NUMBER = 13;
