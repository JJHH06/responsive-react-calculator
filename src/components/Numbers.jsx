/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// se desactivaron las reglas que no dejan que funcionen los botones
import React from 'react';
import PropTypes from 'prop-types';

const Numbers = ({ numero, calculateNumbers }) => {
  const clickNumberListener = () => {
    calculateNumbers(numero);
  };
  return (
    <div className="col calculator-numbers" onClick={clickNumberListener}>
      <p className="calculator-appenders">{numero}</p>
    </div>
  );
};

Numbers.propTypes = {
  numero: PropTypes.string.isRequired,
  calculateNumbers: PropTypes.func.isRequired,
};

export default Numbers;
