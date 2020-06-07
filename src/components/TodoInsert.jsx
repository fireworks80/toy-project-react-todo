import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback(e => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      onInsert(value);
      setValue('');
    },[onInsert, value]
  );

  return (
    <form className="todo-insert" onSubmit={onSubmit}>
      <input type="text" value={value} onChange={onChange} placeholder="할 일 입력" />
      <button><MdAdd /></button>
    </form>
  );
};

export default TodoInsert;