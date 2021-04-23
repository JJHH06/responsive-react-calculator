/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// se desactivaron las reglas que no dejan que funcionen los botones
import React from 'react';
import PropTypes from 'prop-types';

const Operators = ({ simbolo, operador, pushOperation }) => {
  const clickOperatorListener = () => {
    pushOperation(operador);
  };

  return (
    <div className="col calculator-operators" onClick={clickOperatorListener}>
      <p className="operators-caption">{simbolo}</p>
    </div>
  );
};

Operators.propTypes = {
  simbolo: PropTypes.string.isRequired,
  operador: PropTypes.string.isRequired,
  pushOperation: PropTypes.func.isRequired,
};

export default Operators;
