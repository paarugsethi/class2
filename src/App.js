import React from 'react';
import styles from './App.module.css';
import DesignerCard from './Components/DesignerCard/CardComponents/CardExport';

function App() {
  return (
    <div style= {{margin: 4}} className={styles.App}>
      <h1>React II Problem 3 - React Designer Card</h1>
      <DesignerCard/>
    </div>
  );
}

export default App;
