import React from "react";
import PropTypes from "prop-types";
import css from "./AnswersListItem.module.css";


const AnswerListItem = ({ data, result }) => {
  
  const { answerNumber, answerText, isResultVisible, handleChange } = data;
  const { userAnswer, rightAnswer } = result;

  /**
   * styles 
  */ 
  let containerCss = css.listItem;

  if(result) {
    if(answerNumber === rightAnswer) containerCss = css.listItem + ' ' + css.listItemCorrect;
    if(answerNumber === userAnswer && rightAnswer !== userAnswer) containerCss = css.listItem + ' ' + css.listItemIncorrect;
  }

  return (
    <li className={containerCss}>  
      <label className={css.customRadio}>
        <input
          name="answer"
          value={answerNumber}
          type="radio"
          onChange={handleChange}
          disabled={isResultVisible}
        />
        <span>{answerText}</span>
      </label>
    </li>
  );

};

AnswerListItem.propTypes = {
  data: PropTypes.shape({
    answerNumber: PropTypes.number.isRequired,
    answerText: PropTypes.string.isRequired,
    handleChange: PropTypes.func,
  }),

  result: PropTypes.shape({
    rightAnswer: PropTypes.number,
    userAnswer: PropTypes.number
  })
};

export default AnswerListItem;