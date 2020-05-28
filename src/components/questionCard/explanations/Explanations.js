import React from "react";
import PropTypes from "prop-types";
import css from './Explanations.module.css';


const Explanations = ({ dataText }) => {

  return (
    <>
      <h4 className={css.title}>Пояснения:</h4>
      <p className={css.description}>{ dataText }</p>
    </>
  );
};

Explanations.propTypes = {
  dataText: PropTypes.string,
};

export default Explanations;