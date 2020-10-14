import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { hello } from './lib/api/hello';

const App = () => {
  const [message, setMessage] = useState();

  useEffect(() => {
    const response = async () => {
      const res = await hello();

      setMessage(res.data);
    };

    response();
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{message}</h1>
      </header>
    </div>
  );
};

export default App;
