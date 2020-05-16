import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Navbar } from './navbar/Navbar';
import QuestionPage from '../pages/questionPage/QuestionPage';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          {/* Here goes the Home Page */}
        </Route>
        <Route path='/test'>{/* Test Description Page */}</Route>
        <Route path='/question'><QuestionPage/></Route>
        <Route path='/result'>{/* Result Page */}</Route>
        <Route path='/feedback'>{/* Feedback Page */}</Route>
      </Switch>
    </div>
  );
}

export default App;