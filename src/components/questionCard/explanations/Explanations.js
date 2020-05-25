import React from "react";
import PropTypes from "prop-types";

const Explanations = ({ dataText }) => {

  return (
    <>
      <h4>Пояснения:</h4>
      <p>{ dataText }</p>
    </>
  );
};

Explanations.propTypes = {
  dataText: PropTypes.string,
};

export default Explanations;
