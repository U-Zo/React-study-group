import React from 'react';
import { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
  };

  increase() {
    this.setState(({ count }) => ({
      count: count + 1,
    }));
  }

  decrease() {
    this.setState(({ count }) => ({
      count: count - 1,
    }));
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.increase.bind(this)}>+1</button>
        <button onClick={this.decrease.bind(this)}>-1</button>
      </div>
    );
  }
}

export default Counter;
