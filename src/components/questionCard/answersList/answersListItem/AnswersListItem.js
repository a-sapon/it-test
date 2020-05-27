import React from "react";
import PropTypes from "prop-types";


const AnswerListItem = ({ data, result }) => {
  const { answerNumber, answerText, isResultVisible, handleChange } = data;
  const { userAnswer, rightAnswer } = result;

  /**
   * styles 
  */ 
  let resultCss;
  let correctAnswerCss = { backgroundColor: 'rgb(0, 201, 71, 0.102)' };
  let wrongAnswerCss = { backgroundColor: 'rgb(255, 0, 0, 0.102)' };

  if(result) {
    if(answerNumber === rightAnswer) resultCss = correctAnswerCss;
    if(answerNumber === Number(userAnswer) && rightAnswer !== Number(userAnswer)) resultCss = wrongAnswerCss;   
  }

  return (
    <li style={resultCss}>  
      <label>
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
};

export default AnswerListItem;