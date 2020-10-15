import React, { useState } from 'react';
import { useEffect } from 'react';
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

const ChattingBoxWrapper = styled.div`
  height: 600px;
  overflow: auto;
`;

const MessageBoxWrapper = styled.div`
  height: auto;
  box-sizing: border-box;
`;

const MessageBox = styled.div`
  display: inline-block;
  word-break: break-all;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-sizing: border-box;
  margin: 1rem;
  max-width: 60%;
  padding: 1rem;
  width: auto;
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
    <MessageBoxWrapper>
      <MessageBox>
        {user}: {message}
      </MessageBox>
    </MessageBoxWrapper>
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

  useEffect(() => {});

  return (
    <StyledChatting>
      <HeaderBox>채팅방</HeaderBox>
      <ChattingBoxWrapper>
        {chatLog.map((chat) => (
          <Message user={chat.user} message={chat.message} />
        ))}
      </ChattingBoxWrapper>
      <SendMessage addMessage={addMessage} />
    </StyledChatting>
  );
};

export default ChattingBox;
