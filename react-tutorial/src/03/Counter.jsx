import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: this.props.count,
  };

  // increaseCount() {
  //   this.setState({
  //     count: this.state.count + 1
  //   });
  // }

  increaseCount() {
    this.setState(({ count }) => ({
      count: count + 1,
    }));
  }

  render() {
    return (
      <div>
        현재 카운트: {this.state.count}
        <button onClick={this.increaseCount.bind(this)}>카운트 증가</button>
      </div>
    );
  }
}

export default Counter;
