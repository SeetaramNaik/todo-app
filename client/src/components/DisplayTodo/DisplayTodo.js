import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { UpdateTodo } from '../UpdateTodo/UpdateTodo';
import { TodoList } from '../TodoLists/TodoList';

export const DisplayTodo = () => {
  const [todos, setTodo] = useState([]);
  const [id, setId] = useState('');
  const [update, setUpdate] = useState(false);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    axios
      .get('http://localhost:4000/api/todoapp')
      .then((res) => {
        console.log(res.data);
        setTodo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [update]);

  const editTodo = (e) => {
    setId(e.target.name);
    setModal(true);
  };

  const updateTodo = () => {
    setUpdate(!update);
  };

  const deleteTodo = (e) => {
    axios
      .delete(`http://localhost:4000/api/todoapp/${e.target.name}`)
      .then((res) => {
        console.log(res.data);
      });
    setTodo((data) => {
      return data.filter((todo) => todo._id !== e.target.name);
    });
  };

  const closeHandler = () => {
    setId('');
    setModal(false);
  };

  return (
    <div className='todo-container'>
      <Link to='/add-todo' className='todo-btn-new'>
        <button className='todo-btn'>➕ Add new Todo</button>
      </Link>
      <div className='todo-data'>
        <h1></h1>
        <ul className='todo-list-block'>
          {todos.map((todo, index) => (
            <TodoList
              key={index}
              todo={todo}
              editTodo={editTodo}
              deleteTodo={deleteTodo}
            />
            // <li key={index} todo={todo}>
            //   <h1>{todo.title}</h1>
              
            // </li>
          ))}
        </ul>
      </div>
      {modal ? (
        <section className='update-container'>
          <div className='update-todo-data'>
            <p onClick={closeHandler} className='close'>
              &times;
            </p>
            <UpdateTodo
              _id={id}
              closeHandler={closeHandler}
              updateTodo={updateTodo}
            />
          </div>
        </section>
      ) : (
        ''
      )}
    </div>
  );
};
