import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/count">카운터</Link>
        </li>
        <li>
          <Link to="/chat">채팅</Link>
        </li>
        <li>
          <Link to="/style">스타일</Link>
        </li>
      </ul>
    </>
  );
};

export default Main;
