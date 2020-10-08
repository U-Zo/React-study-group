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
        <span>불리언 값: {boolValue}</span>
        <span>숫자 값: {numValue}</span>
        <span>배열 값: {arrayValue}</span>
        <span>객체 값: {(objValue.name, objValue.age)}</span>
        <span>노드 값: {nodeValue}</span>
        <span>함수 값: {funcValue.toString()}</span>
      </div>
    );
  }
}

export default ChildComponent;
