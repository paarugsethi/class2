import React from 'react';
import styles from './App.module.css';
import List from './Components/UseStateMobile/ListExpost';

function App() {
  return (
    <div style= {{margin: 4}} className={styles.App}>
      <h1>React useState and props - React Mobile OS</h1>
      <List/>
    </div>
  );
}

export default App;
