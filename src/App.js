import React from 'react';
import styles from './App.module.css';
import List from './Components/List';
import AnotherList from './Components/AnotherList';
import Question from './Concepts/Question';
import Build from './Concepts/Build';
import Jsx from './Concepts/Jsx';
import Babel from './Concepts/Babel';

function App() {
  return (
    <div style= {{margin: 4}} className={styles.App}>
      <h1>React - Intro (I session) Problem 1</h1>
      <Question/>
      <Build/>
      <Jsx/>
      <Babel/>
    </div>
  );
}

export default App;
