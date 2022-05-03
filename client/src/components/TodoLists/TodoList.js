import React from 'react';

export const TodoList = ({ todo, editTodo, deleteTodo }) => {
  const {  _id,title, description } = todo;

  return (
    <div>
      <li key={_id}>
        <div className='description'>
          <h3>{title}</h3>
          <h2></h2>
          <p>{description}</p>
        </div>
        <h2></h2>
        <div className='btn-container'>
          <button name={_id} className='todo-btn' onClick={editTodo}>
            Edit🖊️
          </button>
          <button name={_id} className='todo-btn' onClick={deleteTodo}>
            Delete🗑️
          </button>
        </div>
      </li>
    </div>
  );
};
