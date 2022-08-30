import React, { useState } from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

const App = () => {
  /* state */
  const [todos, setTodos] = useState([
    { id: 1, text: '할일1', checked: true },
    { id: 2, text: '할일2', checked: true },
    { id: 3, text: '할일3', checked: false },
  ]);

  return (
    <TodoTemplate>
      <TodoInsert></TodoInsert>
      <TodoList todos={todos}></TodoList>
    </TodoTemplate>
  );
};

export default App;
