import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Navbar } from './Navbar/Navbar';
import AllResults from './AllResults/AllResults';
import styles from './App.module.css';
import HomePage from './home-page/HomePage';
import TestPage from './test-page/testPage';

function App() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path='/test'>
          <TestPage />
        </Route>
        <Route path='/question'>{/* Question Page */}</Route>
        <Route path='/result'>
          <AllResults />
        </Route>
        <Route path='/feedback'>{/* Feedback Page */}</Route>
      </Switch>
    </div>
  );
}

export default App;
