import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Navbar } from './Navbar/Navbar';
import AllResults from './AllResults/AllResults'
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
        <Route path='/question'>{/* Question Page */}</Route>
        <Route path='/result'>{AllResults}</Route>
        <Route path='/feedback'>{/* Feedback Page */}</Route>
      </Switch>
    </div>
  );
}

export default App;
