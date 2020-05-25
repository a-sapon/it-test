import React from "react";
import PropTypes from 'prop-types';
import css from './QuestionHdr.module.css';

const QuestionHdr = ({ data, handleClick }) => {
  const {languageTitle, allQuestionsCount, questionNumber} = data;
  
  return (
    <div className={css.hdrContainer}>
      <h2 className={css.hdrTitle}>{`[ ${languageTitle} ]`}</h2>
      <div className={css.hrdCountTitleContainer}>
        <h3 className={css.hrdCountTitle}>
          <span className={css.hiddenForMobile}>Вопрос</span>
          {`${questionNumber}/${allQuestionsCount}`}
        </h3>
      </div>
      <button className={css.hiddenForMobile + ' ' + css.finishTestBtn} onClick={handleClick}>
        Закончить тест
      </button>
    </div>
  );
};

QuestionHdr.propTypes = {
  data: PropTypes.object,
  handleClick: PropTypes.func
}

export default QuestionHdr;
