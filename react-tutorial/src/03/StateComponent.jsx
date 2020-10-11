import React, { Component } from 'react';

class StateComponent extends Component {
  // state 정의
  state = {
    loading: true,
    formData: 'no data',
  };

  constructor(props) {
    super(props);
    this.handleData = this.handleData.bind(this);
    setTimeout(this.handleData, 4000);
  }

  // 클래스의 함수 정의 부분
  handleData() {
    const data = 'new data';
    const { formData } = this.state;

    // state 변경
    this.setState({
      loading: false,
      formData: data + formData,
    });

    // 콘솔에다가 loading 값을 출력하는 겁니다.
    console.log('loading 값', this.state.loading);
  }

  render() {
    return (
      <div>
        <span>로딩중: {String(this.state.loading)}</span>
        <span>결과: {this.state.formData}</span>
      </div>
    );
  }
}

export default StateComponent;
