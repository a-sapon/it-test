import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {
  testsLoaded,
  testsRequested,
  testsError,
} from '../../redux/home/actionCreators';
import styles from './HomePage.module.css';
import quotes from '../../db/quotes.json';
import TestCard from '../test-card/TestCard';
import Spinner from '../Spinner/Spinner';

const HomePage = (props) => {
  const [quote, setQuote] = useState(quotes[0].quote);
  const [author, setAuthor] = useState(quotes[0].author);

  const { testsLoaded, testsRequested, testsError } = props;

  const getRandomQuote = () => {
    const randomQuote = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomQuote].quote);
    setAuthor(quotes[randomQuote].author);
  };

  const shuffleRandomQuote = (arr) => {
    return arr.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    const id = setInterval(() => {
      getRandomQuote();
      shuffleRandomQuote(quotes);
    }, 7000);
    return () => clearInterval(id);
  });

  useEffect(() => {
    async function fetch() {
      testsRequested();
      await axios
        .get('https://test.goit.co.ua/api/tests')
        .then((data) => testsLoaded(data))
        .catch((err) => testsError(err));
    }
    fetch();
  }, [testsLoaded, testsRequested, testsError]);

  return (
    <>
      {props.state !== undefined && props.state.isLoading ? (
        <Spinner />
      ) : (
        <div className={styles.headerWrapper}>
          <div className={styles.headerBack}>
            <span className={styles.headerQuoteIcon}>
              <span style={{ display: 'none' }}>
                Icons made by
                <a
                  href='https://www.flaticon.com/authors/pixel-perfect'
                  title='Pixel perfect'
                >
                  Pixel perfect
                </a>
                from
                <a href='https://www.flaticon.com/' title='Flaticon'>
                  www.flaticon.com
                </a>
              </span>
            </span>
            <div className={styles.quoteWrapper}>
              <span className={styles.headerQuote}>{quote}</span>
              <span className={styles.headerAuthor}>{author}</span>
            </div>
            <div className={styles.headerTestWrapper}>
              <span className={styles.headerOnlineTests}>[ Онлайн тесты </span>
              <span className={styles.headerOnlineTest}>
                для студентов{' '}
                <a
                  className={styles.headerLink}
                  href='https://www.facebook.com/GoITeens'
                  rel='noreferrer noopener'
                  target='_blank'
                >
                  GoITeens{' '}
                </a>
                ]
              </span>
            </div>
          </div>
          <TestCard />
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps, {
  testsLoaded,
  testsRequested,
  testsError,
})(HomePage);
