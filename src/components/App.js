import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Navbar } from './Navbar/Navbar';
import HomePage from './home-page/HomePage';
import TestPage from './test-page/testPage';
import QuestionPage from './questionPage/QuestionPage';
import AllResults from './AllResults/AllResults';
import FeedbackPage from './FeedbackPage/FeedbackPage';
import styles from './App.module.css';

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
        <Route path='/question'>
          <QuestionPage />
        </Route>
        <Route path='/result'>
          <AllResults />
        </Route>
        <Route path='/feedback'>
          <FeedbackPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;