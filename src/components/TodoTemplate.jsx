import React from 'react';
import './TodoTemplate.scss';

const TodoTemplate = ({ children }) => {
  return (
    <div className="todo-template">
      <h1 className="app-tit">일정 관리</h1>
      <div className="content">{children}</div>
    </div>
  );
};

export default TodoTemplate;