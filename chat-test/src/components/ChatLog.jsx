import React from 'react';

const ChatMessage = ({ user, message }) => {
  return (
    <div>
      <div>{user}</div>
      <div>{message}</div>
    </div>
  );
};

const ChatLog = ({ chatLog }) => {
  return (
    <div>
      {chatLog.map((chat) => (
        <ChatMessage user={chat.user} message={chat.message} />
      ))}
    </div>
  );
};

export default ChatLog;
