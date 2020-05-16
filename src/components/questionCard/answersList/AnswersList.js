import React from "react";
import PropTypes from 'prop-types'

const AnswersList = ({ data, handleAnswer, handleContinuation }) => {
  const { answers, image } = data;

  return (
    <>
      <div>
        <img src={process.env.REACT_APP_STATIC_PAGE + image} alt="question" />
      </div>
      <ul>
        {answers.map((el) => (
          <li key={el._id}>
            <input type="radio"></input>
            <p>{el.answerText}</p>
          </li>
        ))}
      </ul>
      <button onClick={handleAnswer}>Ответить</button>
      <button onClick={handleContinuation}>Пропустить</button>
    </>
  );
};

AnswersList.propTypes = {
    data: PropTypes.object,
    handleAnswer: PropTypes.func,
    handleContinuation: PropTypes.func
}

export default AnswersList;
