import React from 'react';

const TodoItem = ({ id, todo, done }) => {
  return (
    <div>
      번호: {id} - 할 일: {todo}, 체크: {String(done)}
    </div>
  );
};

export default TodoItem;
