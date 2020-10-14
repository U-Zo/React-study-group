import React from 'react';
import { Route } from 'react-router-dom';
import Chatting from './chatting/Chatting';
import FuncCounter from './funcClass/FuncCounter';
import Main from './main/Main';
import StyledChatBox from './styled/StyledChatBox';

const App = () => {
  return (
    <>
      <Route path="/" component={Main} exact />
      <Route path="/count" component={FuncCounter} />
      <Route path="/chat" component={Chatting} />
      <Route path="/style" component={StyledChatBox} />
    </>
  );
};

export default App;
