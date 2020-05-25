import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Navbar } from './Navbar/Navbar';
import styles from './App.module.css';
import Spinner from "./Spinner/Spinner";

// lazy import

const HomePage = lazy(() =>
  import("./home-page/HomePage" /* webpackChunkName: "home-block" */)
);

const TestDescriptionPage = lazy(() =>
  import(
    "./test-page/testPage" /* webpackChunkName: "test-description-block" */
  )
);

const QuestionPage = lazy(() =>
  import("./questionPage/QuestionPage" /* webpackChunkName: "question-block" */)
);

const ResultsPage = lazy(() =>
  import(
    "./AllResults/AllResults" /* webpackChunkName: "result-block" */
  )
);

const FeedbackPage = lazy(() =>
  import(
    "./FeedbackPage/FeedbackPage" /* webpackChunkName: "feedback-block" */
  )
);

function App() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Suspense fallback={<Spinner/>}>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/test" component={TestDescriptionPage}/>
          <Route path="/question" component={QuestionPage}/>
          <Route path="/result" component={ResultsPage}/>
          <Route path="/feedback" component={FeedbackPage}/>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;