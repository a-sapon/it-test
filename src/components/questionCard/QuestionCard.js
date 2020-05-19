import React from "react";
import PropTypes from 'prop-types'
import Question from "./question/Question";
import AnswersList from "./answersList/AnswersList";
// import Explanations from './';
// import css from './QuestionCard.module.css'

// answers: Array(7)
//      0: {_id: "5d39e777c7de0f78024cf070", answerNumber: 1, answerText: "На консоль выведется "312""}
//      1: {_id: "5d39e777c7de0f78024cf06f", answerNumber: 2, answerText: "На консоль выведется "321""}
//      2: {_id: "5d39e777c7de0f78024cf06e", answerNumber: 3, answerText: "Произойдет ошибка компиляции"}
//      3: {_id: "5d39e777c7de0f78024cf06d", answerNumber: 3, answerText: "На консоль выведется "23""}
//      4: {_id: "5d39e777c7de0f78024cf06c", answerNumber: 4, answerText: "На консоль выведется "213""}
//      5: {_id: "5d39e777c7de0f78024cf06b", answerNumber: 5, answerText: "На консоль выведется "123""}
//      6: {_id: "5d39e777c7de0f78024cf06a", answerNumber: 6, answerText: "Я не знаю"}
// image: "Java-16.png"
// imageMobile: "Java-16-mob.png"
// questionId: "5ebf0f78177303494646efb1"
// questionText: "Что произойдет при попытке скомпи

const QuestionCard = ({ data }) => {
  const { questionText, answers, image, imageMobile } = data;

  const answersData = { answers, image, imageMobile };

  
  const giveAnswer = () => {}
  const skipAnswer = () => {}

  return (
    <>
      <Question question={questionText} />
      <AnswersList data={answersData} handleAnswer={giveAnswer} handleContinuation={skipAnswer}/>
      {/* <Explanations /> */}
    </>
  );
};

QuestionCard.propTypes = {
    questionText: PropTypes.string,
    answers: PropTypes.array,
    image: PropTypes.string,
    imageMobile: PropTypes.string
}

export default QuestionCard;
