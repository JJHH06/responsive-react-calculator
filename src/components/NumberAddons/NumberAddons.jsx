/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// se desactivaron las reglas que no dejan que funcionen los botones
import React from 'react';
import PropTypes from 'prop-types';

const NumberAddons = ({ operacion, addonOperator }) => {
  const clickOperatorListener = () => {
    addonOperator(operacion);
  };
  return (
    <div className="col calculator-numbers" onClick={clickOperatorListener}>
      <p className="calculator-appenders">{operacion}</p>
    </div>
  );
};

NumberAddons.propTypes = {
  operacion: PropTypes.string.isRequired,
  addonOperator: PropTypes.func.isRequired,
};

export default NumberAddons;
