import React, { Component } from 'react';

class LifecycleExample extends Component {
  // props를 받아서 state로 바꿔주는 애
  static getDerivedStateFromProps() {
    console.log('getDerivedStateFromProps 호출');
    return {};
  }

  // 생성자
  constructor(props) {
    super(props);

    this.state = {};
    console.log('constructor 호출');
  }

  // 컴포넌트가 마운트가 됐을 때 수행할 라이프 사이클 함수
  componentDidMount() {
    console.log('componentDidMount 호출');
    this.forceUpdate(); // 강제로 업데이트 수행
  }

  // 컴포넌트가 업데이트 됐을 때 수행할 라이프 사이클 함수
  componentDidUpdate() {
    console.log('componentDidUpdate 호출');
  }

  // 컴포넌트가 언마운트 될 때
  // 소멸되기 직전에 수행할 코드 작성
  componentWillUnmount() {
    console.log('componentWillUnmount 호출');
  }

  // 변경된 내용이 화면에 완성된 이후에 호출되는 라이프 사이클 함수
  getSnapshotBeforeUpdate() {
    console.log('getSnapshotBeforeUpdate 호출');
    return {};
  }

  // 이전 값이랑 현재 값을 비교했을 때 컴포넌트를 업데이트해야 하는지 결정
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate 호출');
    return false;
  }

  render() {
    console.log('render 호출');
    return null;
  }
}

export default LifecycleExample;
