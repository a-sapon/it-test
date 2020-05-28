import React from 'react';
import { connect } from 'react-redux';
import Circle from 'react-circle';
import styles from './AllResults.module.css';
import QuestionCard from '../questionCard/QuestionCard';

const TestDuration = ({ start, finish }) => {
  const diff = new Date(finish).getTime() - new Date(start).getTime();
  const duration = Math.round(diff / 60000);
  return duration;
};

const AllResults = ({ test }) => {
  console.log(test);
  const {
    languageTitle,
    rightAnsweredInPercentage,
    userRightAnswered,
    allQuestionsCount,
    startTime,
    finishTime,
    questions
  } = test;

  return (
    <section id="results">
      <div className={styles.grade}>
        <h1 className={styles.grade__title}>
          Результаты теста “{languageTitle}”
        </h1>
        <Circle
          progress={rightAnsweredInPercentage}
          animate={true}
          animationDuration="1s"
          responsive={false}
          size="155"
          lineWidth="40"
          progressColor="rgb(255, 108, 0)"
          bgColor="#8b92ab"
          textColor="#fff"
          textStyle={{ font: 'bold 6em OpenSans-Bold, sans-serif' }}
        />
        <h2 className={styles.grade__subtitle}>
          Молодец! <br />
          Но можно лучше{')))'}
        </h2>
        <ul className={styles.grade__list}>
          <li className={styles.grade__list__item}>
            Правильных ответов <span>{userRightAnswered}</span>
          </li>
          <li className={styles.grade__list__item}>
            Всего вопросов <span>{allQuestionsCount}</span>
          </li>
          <li className={styles.grade__list__item}>
            Время{' '}
            <span>
              <TestDuration start={startTime} finish={finishTime} /> мин
            </span>
          </li>
        </ul>
        <button className={styles.grade__button}>
          <span>Пройти еще раз</span>
        </button>
      </div>
      
      {questions.map((el) => {
        const dataParams = {
          questionText: el.questionText,
          isResultVisible: true,
          answers: el.answers,
          image: el.image,
          imageMobile: el.imageMobile,
        }
          const resultParams = {
            AnswerCorrectly: el.userAnswerCorrectly,
            userAnswer: el.userAnswer,
            rightAnswer: el.rightAnswer,
          };
        return (
          <QuestionCard
            key={el.questionId}
            data={dataParams}
            result={resultParams}
          />
        );
      })}
    </section>
  );
};

const mapStateToProps = (state) => ({
  test: state.test,
});

export default connect(mapStateToProps)(AllResults);
