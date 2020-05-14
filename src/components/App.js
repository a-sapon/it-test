import React from "react";
import { Switch, Route } from "react-router-dom";
import { Navbar } from "./Navbar/Navbar";
import styles from "./App.module.css";
import FeedbackPage from "./FeedbackPage/FeedbackPage";

function App() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Switch>
        <Route exact path="/">
          {/* Here goes the Home Page */}
        </Route>
        <Route path="/test">{/* Test Description Page */}</Route>
        <Route path="/question">{/* Question Page */}</Route>
        <Route path="/result">{/* Result Page */}</Route>
        <Route path="/feedback">{/* Feedback Page */}</Route>
      </Switch>
      <FeedbackPage />
    </div>
  );
}

export default App;
