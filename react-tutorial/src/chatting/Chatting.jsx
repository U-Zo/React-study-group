import React from 'react';
import { useState } from 'react';
import ChattingBox from './ChattingBox';
import SignIn from './SignIn';

const Chatting = () => {
  const [user, setUser] = useState(null);

  const signIn = (user) => {
    setUser(user);
  };

  return <div>{user ? <ChattingBox user={user} /> : <SignIn signIn={signIn} />}</div>;
};

export default Chatting;
