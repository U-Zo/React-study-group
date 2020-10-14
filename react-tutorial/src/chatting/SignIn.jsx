import React, { useState } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  padding: 1rem;
  border: 1px solid #ddd;
  outline: none;
  border-radius: 5px;
  box-sizing: border-box;
  margin: 3rem;
`;

const SignIn = ({ signIn }) => {
  const [username, setUsername] = useState('');

  const onChange = (e) => {
    setUsername(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    signIn(username);
  };

  return (
    <form onSubmit={onSubmit}>
      <StyledInput name="username" type="text" onChange={onChange} value={username} />
    </form>
  );
};

export default SignIn;
