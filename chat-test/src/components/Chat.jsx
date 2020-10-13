import React, { Component } from 'react';
import ChatLog from './ChatLog';
import Send from './Send';

class Chat extends Component {
  state = {
    chatLog: [
      {
        user: '시민1',
        message: '나 임포스터 아님',
      },
      {
        user: '시민2',
        message: '시민 3이 범인임',
      },
      {
        user: '시민3',
        message: '왜 나 몰아감?',
      },
      {
        user: '시민4',
        message: '아 몰라 나는 1번 죽인다',
      },
    ],
  };

  sendMessage(message) {
    this.setState({
      chatLog: [
        ...this.state.chatLog,
        {
          user: this.props.user,
          message,
        },
      ],
    });
  }

  render() {
    return (
      <div>
        <ChatLog chatLog={this.state.chatLog} />
        <Send sendMessage={this.sendMessage.bind(this)} />
      </div>
    );
  }
}

export default Chat;
