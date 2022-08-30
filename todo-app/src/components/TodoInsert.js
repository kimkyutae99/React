import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
  /* state */
  const [value, setValue] = useState('');

  /**
   * 함수를 재사용하기 위해 useCallback 사용
   * 할 일 입력 input Event
   */
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      onInsert(value);
      setValue('');
    },
    [onInsert, value],
  );

  return (
    <form className='TodoInsert' onSubmit={onSubmit}>
      <input
        placeholder='할 일을 입력하세요.'
        value={value}
        onChange={onChange}
      ></input>
      <button type='submit'>
        <MdAdd></MdAdd>
      </button>
    </form>
  );
};

export default TodoInsert;
