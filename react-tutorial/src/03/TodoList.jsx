import React from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
  const todoList = [
    {
      id: 1,
      todo: '빨래하기',
      done: false,
    },
    {
      id: 2,
      todo: '공부하기',
      done: false,
    },
  ];

  return (
    <div>
      {todoList.map(todo => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          todo={todo.todo}
          done={todo.done}
        />
      ))}
    </div>
  );
};

export default TodoList;
