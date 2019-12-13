import React from 'react';
import { MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline } from 'react-icons/md';
import cn from 'classnames';

const TodoListItem = ({ todo }) => {
  const { text, checked } = todo;
  return (
    <li className="todo-list-item">
      <div className={cn('checkbox', { checked })}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <span className="text">{text}</span>
      </div>
      <button className="remove">
        <MdRemoveCircleOutline />
      </button>
    </li>
  );
};

export default TodoListItem;