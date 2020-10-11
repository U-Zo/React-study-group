import React, { Component } from 'react';

class StateExample extends Component {
  // 생성자
  constructor(props) {
    // 부모 클래스
    super(props);

    // 부모 클래스의 상태
    // 클래스의 인스턴스 변수
    this.state = {
      loading: true,
      formData: 'no data',
    };

    this.handleData = this.handleData.bind(this);

    // 4초 뒤에 내가 갖고 있는 handleData를 수행하겠다.
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

export default StateExample;
