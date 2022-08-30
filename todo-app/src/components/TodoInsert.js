import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = () => {
  /* state */
  const [value, setValue] = useState('');

  /**
   * 함수를 재사용하기 위해 useCallback 사용
   */
  const onChange = useCallback((e) => {
    const { value } = e.target || {};
    setValue(value);
  }, []);

  return (
    <form className='TodoInsert'>
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
