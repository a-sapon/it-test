import React from "react";
import PropTypes from 'prop-types'

const QuestionHdr = ({ data, handleClick }) => {
  const {languageTitle, allQuestionsCount, questionNumber} = data;
  
  return (
    <>
      <h2>{`[ Основы ${languageTitle} ]`}</h2> 
      <h2>{`Вопрос ${questionNumber}/${allQuestionsCount}`}</h2>
      <button onClick={handleClick}>Закончить тест</button>
    </>
  );
};

QuestionHdr.propTypes = {
  data: PropTypes.object,
  handleClick: PropTypes.func
}

export default QuestionHdr;
