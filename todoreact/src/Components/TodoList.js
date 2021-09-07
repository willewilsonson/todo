import React, { useState } from 'react';
import './TodoList.css';

const TodoList = props => {
  const {
    TodoCard, addTodo, todos, doneTodo, removeTodo, clearAll,
  } = props;
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  return (
    <section className='todo-list'>
      <form className='todo-list__form' onSubmit={handleSubmit}>
        <input
          type='text'
          className='form__input'
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder='Add a ToDo...'
          />
          <button
          className='form__submit'
          type='submit'
          >
            Add
          </button>
      </form>
      {todos.map((todo, index) => (
        <TodoCard
          key={index}
          index={index}
          todo={todo}
          doneTodo={doneTodo}
          removeTodo={removeTodo}
          />
      ))}
      <section className='pending'>
        <h3 className='pending__title'>Pending &#x21b4;</h3>
      </section>
      <section className='completed'>
        <h3 className='completed__title'>Completed &#x21b4;</h3>
      </section>
      <button onClick={() => clearAll()} className='todo-list__clear-button'>Clear List</button>
    </section>
  );
};

export default TodoList;
