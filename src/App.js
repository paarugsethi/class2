import React from 'react';
import styles from './App.module.css';
import Todo from './Components/TODO/Todo';

function App() {
  return (
    <div style= {{margin: 4}} className={styles.App}>
      <h1>To-do List</h1>
      <Todo/>
    </div>
  );
}

export default App;
