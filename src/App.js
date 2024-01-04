import React from 'react';
import Todolist from './Todolist';
import './App.css';

const App = () => {
  return (
    <div className='main-container'>
      <div className='header'>Todolist</div>
      <div className='todo-list'>
        <Todolist />
      </div>
    </div>
  )
}

export default App;