import React from "react";
import PropTypes from "prop-types";

const AnswerListItem = ({ data }) => {
  const { answerNumber, answerText, handleChange } = data;
  
  return (
    <li>
      <label>
        <input
          name="answer"
          value={answerNumber}
          type="radio"
          onChange={handleChange}
        />
        <span>{answerText}</span>
      </label>
    </li>
  );
};

AnswerListItem.propTypes = {
  answerNumber: PropTypes.string,
  answerText: PropTypes.string,
  handleChange: PropTypes.func,
};

export default AnswerListItem;
