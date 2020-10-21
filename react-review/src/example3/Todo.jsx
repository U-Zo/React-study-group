import React from 'react';

const Todo = ({ id, text, onDelete }) => {
  const onRemove = () => {
    onDelete(id);
  };

  return (
    <li>
      {id}: {text}
      <button onClick={onRemove}>삭제</button>
    </li>
  );
};

export default Todo;
