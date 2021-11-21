import React from 'react';
import styles from './App.module.css';
import Counter from './Counter/Counter';

function App() {
  return (
    <div style= {{margin: 4}} className={styles.App}>
      <Counter/>
    </div>
  );
}

export default App;
