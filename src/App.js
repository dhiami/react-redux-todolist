import './App.css';
import AddTodo from './components/AddTodo';
import Todo from './components/Todo';
import TodoList from './components/TodoList';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <h1 className="title">Todo App</h1>
      <AddTodo/>
      <TodoList />
    </div>
  );
}

export default App;
