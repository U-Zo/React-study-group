import React, { Component } from 'react';

class Login extends Component {
  state = {
    id: '',
    password: '',
  };

  onSubmit(e) {
    e.preventDefault();
    this.props.login(this.state.id);
    this.setState({
      id: '',
      password: '',
    });
  }

  onChange(e) {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });

    console.log(this.state);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div>
            <input
              onChange={this.onChange.bind(this)}
              name="id"
              value={this.state.id}
              type="text"
              placeholder="아이디"
            />
          </div>
          <div>
            <input
              onChange={this.onChange.bind(this)}
              name="password"
              value={this.state.password}
              type="password"
              placeholder="비밀번호"
            />
          </div>
          <button>로그인</button>
        </form>
      </div>
    );
  }
}

export default Login;
