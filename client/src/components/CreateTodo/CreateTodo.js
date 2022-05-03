import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export const CreateTodo = () => {
  const [todos, setTodos] = useState({ title: '', description: '' });

  const handleChange = (e) => {
    setTodos((data) => ({ ...data, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:4000/api/todoapp', todos)
      .then((res) => {
        setTodos({ title: '', description: '' });
        console.log(res.data.message);
      })
      .catch((err) => {
        console.log("COULDN'T CREATE TODO...SORRY!!!");
        console.log(err.message);
      });
  };

  return (
    <div className='create-container'>
      <Link to='/'>
        <button type='button' className='todo-btn todo-btn-back'>
          🔙 back
        </button>
      </Link>

      <div className='todo-data'>
        <form onSubmit={handleSubmit} className='form-container' noValidate>
          <label className='label' htmlFor='title'>
            Todo title
          </label>
          <input
            type='text'
            name='title'
            value={todos.title}
            onChange={handleChange}
            className='input'
          />
          <label className='label' htmlFor='description'>
            Describe it!
          </label>
          <input
            type='textarea'
            name='description'
            value={todos.description}
            onChange={handleChange}
            className='input'
          />
          <button type='submit' className='create-todo-btn'>
            ➕ create Todo
          </button>
        </form>
      </div>
    </div>
  );
};
