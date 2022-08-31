import React, { useState, useCallback, useRef } from 'react';
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

  /* ref */
  const nextId = useRef(4);

  /* event */

  // 삭제
  const onRemove = useCallback((id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  });

  // 입력
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };

      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}></TodoInsert>
      <TodoList todos={todos} onRemove={onRemove}></TodoList>
    </TodoTemplate>
  );
};

export default App;
