import React from 'react';
import { connect } from 'react-redux';
import styles from '../home-page/HomePage.module.css';
import { Link } from 'react-router-dom';

const TestCard = (props) => {
  console.log(props);
  return (
    <ul className={styles.headerList}>
      {props.state.home !== undefined &&
        props.state.home.testsList !== undefined &&
        props.state.home.testsList.data !== undefined &&
        props.state.home.testsList.data.languages.map((el) => {
          return (
            <li className={styles.headerListItem} key={el.languageId}>
              <Link
                to={{
                  pathname: `/test`,
                  state: {
                    item: el,
                  },
                }}
              >
                <img
                  className={styles.headerImage}
                  src={el.image}
                  alt={el.title}
                />
                <span className={styles.langDescription}>{el.title}</span>
                <span className={styles.questionsCount}>
                  {el.pullQuestions} вопросов
                </span>
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps)(TestCard);
