import React from "react";
import PropTypes from 'prop-types';
import css from './Question.module.css'

const Question = ({question, number}) => (
    <div className={css.board}>
        <h2 className={css.boardTitle}><span>{number}</span>{question}</h2>
    </div>
);

Question.propTypes = {
    question: PropTypes.string.isRequired,
    number: PropTypes.string
}

export default Question;
