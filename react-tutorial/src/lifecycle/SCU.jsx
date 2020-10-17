import React, { Component } from 'react';

class SCU extends Component {
  state = {
    number: 0,
  };

  increase = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log(
      `shouldComponentUpdate
      현재 state: ${this.state.number}
      다음 state: ${nextState.number}`
    );

    return nextState.number % 2 === 0; // 2의 배수이면 다시 렌더링
  }

  render() {
    return (
      <div>
        <h1>{this.state.number}</h1>
        <button onClick={this.increase}>+1</button>
      </div>
    );
  }
}

export default SCU;
