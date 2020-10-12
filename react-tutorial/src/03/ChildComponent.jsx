import React, { Component } from 'react';

class ChildComponent extends Component {
  render() {
    const {
      boolValue,
      numValue,
      arrayValue,
      objValue,
      nodeValue,
      funcValue,
    } = this.props;

    return (
      //
      <div>
        <div>불리언 값: {boolValue.toString()}</div>
        <div>숫자 값: {numValue}</div>
        <div>배열 값: {arrayValue}</div>
        <div>객체 값: {String(Object.entries(objValue))}</div>
        <div>노드 값: {nodeValue}</div>
        <div>함수 값: {funcValue.toString()}</div>
      </div>
    );
  }
}

export default ChildComponent;
