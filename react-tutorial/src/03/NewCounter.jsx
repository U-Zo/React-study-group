import React, { Component } from 'react';

class NewCounter extends Component {
  state = {};

  // props를 받아와서 state로 변환
  static getDerivedStateFromProps(props, state) {
    // this.props.count
    // props = {count: 10}
    const { count } = props;

    console.log(state.count, state.newCount);

    return {
      count,
      newCount: count === state.count ? state.newCount : count,
    };
  }

  // state = {count: 10, newCount: 10}

  increaseCount() {
    this.setState(({ newCount }) => ({
      newCount: newCount + 1,
    }));
  }

  render() {
    return (
      <div>
        현재 카운트: {this.state.newCount}
        <button onClick={this.increaseCount.bind(this)}>카운트 증가</button>
      </div>
    );
  }
}

export default NewCounter;
