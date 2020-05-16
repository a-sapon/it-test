import React from "react";
import PropTypes from 'prop-types';
import css from './Question.module.css'

const Question = ({question}) => (
    <div className={css.questionBoard}>
        <h2 className={css.questionBoardTitle}>{question}</h2>
    </div>
);

Question.propTypes = {
    question: PropTypes.string
}

export default Question;
