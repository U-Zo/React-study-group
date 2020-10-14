import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 0.8rem 1rem;
  border: none;
  border-top: 1px solid #ddd;
  outline: none;
  font-size: 1.1rem;
`;

const SendMessage = ({ addMessage }) => {
  const [message, setMessage] = useState('');

  const sendMessage = (e) => {
    e.preventDefault();
    addMessage(message);
    setMessage('');
  };

  const onChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <form onSubmit={sendMessage}>
      <StyledInput
        type="text"
        onChange={onChange}
        value={message}
        placeholder="메시지 입력"
      />
    </form>
  );
};

export default SendMessage;
