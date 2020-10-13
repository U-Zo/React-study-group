import React, { Component } from 'react';
import Chat from './components/Chat';
import Login from './components/Login';

class App extends Component {
  state = {
    user: null,
  };

  loginHandler(user) {
    this.setState({
      user: user,
    });
  }

  render() {
    console.log(this.state);

    const { user } = this.state;
    return (
      <>{user ? <Chat user={user} /> : <Login login={this.loginHandler.bind(this)} />}</>
    );
  }
}

export default App;
