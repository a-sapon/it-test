import React from "react";
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './QuestionHdr.module.css';

const QuestionHdr = ({ data, handleClick }) => {
  const {languageTitle, allQuestionsCount, questionNumber} = data;
  
  return (
    <div className={css.container}>
      <div className={css.titleContainer}>
        <NavLink to='/' className={css.returnLink + ' ' + css.hiddenForTabletPlus}></NavLink>
        <h2 className={css.title}>{`[ ${languageTitle} ]`}</h2>
      </div>
      <div className={css.countTitleContainer}>
        <h3 className={css.countTitle}>
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
