import React from 'react';
import styles from './App.module.css';
import Mobiles from './Components/MobileQuestion/MobileMain';

function App() {
  return (
    <div style= {{margin: 4}} className={styles.App}>
      <h1>React II Problem 1 - React Mobile OS</h1>
      <Mobiles/>
    </div>
  );
}

export default App;
