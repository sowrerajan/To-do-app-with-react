import React from 'react';
import './App.css'
import Todoform from './ToDoApp/Todoform';
import Todolist from './ToDoApp/Todolist';

function App() {
  return (
    <div className="todo-app">
      <h1>To-Do App</h1>
      <Todolist/>
    </div>
  );
}

export default App;
