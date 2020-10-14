import React, { useState } from 'react';
import styled from 'styled-components';
import SendMessage from './SendMessage';

const StyledChatting = styled.div`
  box-sizing: border-box;
  margin: 3rem;
  border: 1px solid #ddd;
  border-radius: 10px;
  width: 500px;
  overflow: hidden;
  font-size: 1.1rem;
`;

const MessageBox = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  box-sizing: border-box;
  margin: 1rem;
  max-width: 60%;
  padding: 1rem;
`;

const HeaderBox = styled.div`
  background-color: #4287f5;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

const Message = ({ user, message }) => {
  return (
    <MessageBox>
      {user}: {message}
    </MessageBox>
  );
};

const ChattingBox = ({ user }) => {
  const [chatLog, setChatLog] = useState([
    {
      user: 'system',
      message: '채팅방에 접속하셨습니다.',
    },
  ]);

  const addMessage = (message) => {
    setChatLog([
      ...chatLog,
      {
        user,
        message,
      },
    ]);
  };

  return (
    <StyledChatting>
      <HeaderBox>채팅방</HeaderBox>
      {chatLog.map((chat) => (
        <Message user={chat.user} message={chat.message} />
      ))}
      <SendMessage addMessage={addMessage} />
    </StyledChatting>
  );
};

export default ChattingBox;
