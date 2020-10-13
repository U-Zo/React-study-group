import React, { Component } from 'react';

class Send extends Component {
  state = {
    message: '',
  };

  sendMessage(e) {
    e.preventDefault();
    this.props.sendMessage(this.state.message);
    this.setState({
      message: '',
    });
  }

  onChange(e) {
    this.setState({
      message: e.target.value,
    });
  }

  render() {
    return (
      <form onSubmit={this.sendMessage.bind(this)}>
        <input
          type="text"
          onChange={this.onChange.bind(this)}
          value={this.state.message}
        />
      </form>
    );
  }
}

export default Send;
