import React from "react";
import PropTypes from 'prop-types';
import Question from "./question/Question";
import AnswersList from "./answersList/AnswersList";
import Explanations from './explanations/Explanations';
import css from './QuestionCard.module.css'


const QuestionCard = ({ data, result }) => {

  const { questionText, isResultVisible } = data;
  const { explanation } = result;

  return (
    <div className={css.questionCardContainer}>
      <Question question={questionText} />
      <AnswersList data={data} result={result}/>

      { isResultVisible && explanation &&
        (<Explanations dataText={explanation}/>)
      }
    </div>
  );
  
};

QuestionCard.propTypes = {

  data: PropTypes.shape({
    questionText: PropTypes.string.isRequired,
    isResultVisible: PropTypes.bool.isRequired,
    answers: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    image: PropTypes.string,
    imageMobile: PropTypes.string,
    handleChange: PropTypes.func,
    handleClick: PropTypes.func,
    handleSubmit: PropTypes.func
  }),

  result: PropTypes.shape({
    answerCorrectly: PropTypes.bool,
    explanation: PropTypes.string,
    rightAnswer: PropTypes.number,
    userAnswer: PropTypes.number
  })

}

QuestionCard.defaultProps = {
  handleChange: () => null,
  handleClick: () => null,
  handleSubmit: () => null,
};

export default QuestionCard;