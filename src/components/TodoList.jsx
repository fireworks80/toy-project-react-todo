import React from 'react';
import TodoListItem from './TodoListItem';
import './todolist.scss';

const TodoList = ({ todos }) => {
  return (
    <ul className="todo-list">
      {
        todos.map((todo, idx) => <TodoListItem todo={todo} key={todo.id} />)
      }
    </ul>
  );
};

export default TodoList;