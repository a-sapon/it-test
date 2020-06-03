import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { Nav } from './Navbar/Nav';
import styles from './App.module.css';
import Spinner from './Spinner/Spinner';

const HomePage = lazy(() =>
  import('./home-page/HomePage' /* webpackChunkName: "home" */)
);

const TestPage = lazy(() =>
  import(
    './test-page/testPage' /* webpackChunkName: "test-description" */
  )
);

const QuestionPage = lazy(() =>
  import('./questionPage/QuestionPage' /* webpackChunkName: "question" */)
);

const ResultsPage = lazy(() =>
  import('./AllResults/AllResults' /* webpackChunkName: "result" */)
);

const FeedbackPage = lazy(() =>
  import('./FeedbackPage/FeedbackPage' /* webpackChunkName: "feedback" */)
);

function App({ location }) {
  return (
    <div className={styles.container}>
      <Nav />
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path='/' component={HomePage} />
          {location.state && (
            <Route path='/test' component={TestPage} />
          )}
          {location.state && (
            <Route path='/question' component={QuestionPage} />
          )}
          {location.state && <Route path='/result' component={ResultsPage} />}
          <Route path='/feedback' component={FeedbackPage} />
          <Redirect to='/' />
        </Switch>
      </Suspense>
    </div>
  );
}

export default withRouter(App);