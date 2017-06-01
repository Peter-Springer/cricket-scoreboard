import React, { Component } from 'react';

class ScoreboardBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  updateCount() {
    if (this.state.count >= 3) {
      return this.setState({ count: 0})
    }
    // eslint-disable-next-line
    return this.setState({ count: this.state.count += 1})
  }

  render() {
    if (this.state.count === 0) {
      return (
        <div onClick={() => this.updateCount()} className='hit-container'>
          <span>👾</span>
        </div>
      )
    } else if  (this.state.count === 1) {
      return (
        <div onClick={() => this.updateCount()} className='hit-container'>
          <span>/</span>
        </div>
      )
    } else if (this.state.count === 2) {
      return (
        <div onClick={() => this.updateCount()} className='hit-container'>
          <span>X</span>
        </div>
      )
    } else if (this.state.count === 3) {
      return (
        <div onClick={() => this.updateCount()} className='closed-container'>
          <span>X</span>
        </div>
      )
    } else {
      return (
        <h1>ERROR</h1>
      )
    }
  }
}

export default ScoreboardBlock;
