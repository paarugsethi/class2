import React from 'react';
import styles from './App.module.css';
import List from './Components/ListComponents/List';

function App() {
  return (
    <div style= {{margin: 4}} className={styles.App}>
      <h1>React I Problem 2 - List</h1>
      <List/>
    </div>
  );
}

export default App;
