import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import UsersPage from './pages/UsersPage';

const App = () => {
  return (
    // 리액트 프래그먼트
    <>
      <Route path="/" component={UsersPage} exact />
    </>
  );
};

export default App;
