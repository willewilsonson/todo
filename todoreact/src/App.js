import React, { useState } from 'react';
import TodoCard from './Components/TodoCard';
import TodoList from './Components/TodoList';
import './App.css';

const App = () => {
  const state = JSON.parse(localStorage.getItem('todos'));

  const [todos, setTodos] = useState(
    state || [],
  );

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    localStorage.setItem('todos', JSON.stringify(newTodos));
    setTodos(newTodos);
    window.location.reload();
  };

  const checkDoneButton = index => {
    if (todos[index].isDone) {
      todos[index].isDone = false;
    } else {
      todos[index].isDone = true;
    }
  };

  const doneTodo = index => {
    const newTodos = [...todos];
    checkDoneButton(index);
    localStorage.setItem('todos', JSON.stringify(newTodos));
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    localStorage.removeItem(index);
    localStorage.setItem('todos', JSON.stringify(newTodos));
    setTodos(newTodos);
  };

  const clearAll = () => {
    localStorage.clear();
    setTodos([]);
  };

  return (
    <main className='App'>
      <header className='header'>
        <h1 className='header__title'>ToDo List</h1>
      </header>
      <TodoList
        TodoCard={TodoCard}
        addTodo={addTodo}
        doneTodo={doneTodo}
        removeTodo={removeTodo}
        todos={todos}
        clearAll={clearAll}
      />
    </main>
  );
};

export default App;
