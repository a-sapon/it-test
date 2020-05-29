import React from "react";
import PropTypes from "prop-types";
import css from './Explanations.module.css';


const Explanations = ({ dataText }) => {

  return (
    <div className={css.container}>
      <h4 className={css.title}>Пояснения:</h4>
      <p className={css.description}>{ dataText }</p>
    </div>
  );
};

Explanations.propTypes = {
  dataText: PropTypes.string,
};

export default Explanations;