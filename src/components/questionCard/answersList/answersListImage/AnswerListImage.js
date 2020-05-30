import React from 'react';
import PropTypes from 'prop-types';
import css from './AnswerListImage.module.css';

const QuestionImage = ({ desktopImg, mobileImg }) => (
  <picture className={css.container}>
    <source media="(min-width: 768px)" srcSet={desktopImg} />
    <img src={mobileImg} alt="mobileImage" />
  </picture>
);

QuestionImage.propTypes = {
  desktopImage: PropTypes.string,
  mobileImage: PropTypes.string,
};

export default QuestionImage;