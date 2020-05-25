import React from 'react';
import PropTypes from 'prop-types';
import css from './NewTestImage.module.css';

const QuestionImage = ({ desktopImage, mobileImage }) => (
  <picture>
    <source media="(min-width: 768px)" srcSet={desktopImage} />
    <source media="(min-width: 1280px)" srcSet={desktopImage} />
    <img className={css.image} src={mobileImage} alt="mobileImage" />
  </picture>
);

QuestionImage.propTypes = {
  desktopImage: PropTypes.string,
  mobileImage: PropTypes.string,
};

export default QuestionImage;