import React from 'react';
import { useState } from 'react';
import axios from 'axios';

export const UpdateTodo = ({ _id, closeHandler, updateTodo }) => {
  const [todo, setTodo] = useState({ title: '', description: '' });

  const handleChange = (e) => {
    setTodo((data) => ({ ...data,[e.target.name]: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:4000/api/todoapp/${_id}`, todo)
      .then((res) => {
        setTodo({ title: '', description: '' });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <form
        className='form-container'
        onSubmit={(e) => {
          submitHandler(e);
          updateTodo();
          closeHandler();
        }}
      >
        <label htmlFor='title' className='label'>
          Todo Title
        </label>
        <input
          type='text'
          name='title'
          className='input'
          onChange={handleChange}
        />
        <label htmlFor='description' className='label'>
          Todo Description
        </label>
        <input
          type='textarea'
          name='description'
          className='input'
          onChange={handleChange}
        />
        <button type='submit' className='update-btn'>
          ➕ Add
        </button>
      </form>
    </div>
  );
};
