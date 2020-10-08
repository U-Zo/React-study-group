import React, { Component } from 'react';

class ChildComponent2 extends Component {
  render() {
    const { objValue } = this.props;

    return (
      //
      <div>
        <div>객체 값: {String(Object.entries(objValue))}</div>
      </div>
    );
  }
}

export default ChildComponent2;
