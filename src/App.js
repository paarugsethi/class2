import React from 'react';
import styles from './App.module.css';
import Layout from './ReactMenu/MenuComponents/MenuLayout';
import SingleButtons from './ReactMenu/MenuComponents/SingleComponent/ButtonExport';

function App() {
  return (
    <div style= {{margin: 4}} className={styles.App}>
      <h1>React II Problem 2 - React Menu</h1>
      <Layout/>
      <SingleButtons/>
    </div>
  );
}

export default App;
