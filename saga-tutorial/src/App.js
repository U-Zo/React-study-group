import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import UsersPage from './pages/UsersPage';

const App = () => {
  return (
    <>
      <Route path="/" component={UsersPage} exact />
    </>
  );
};

export default App;
