/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// se desactivaron las reglas que no dejan que funcionen los botones
import React from 'react';
import PropTypes from 'prop-types';

const EqualOperator = ({ simbolo, calcularResultado }) => {
  const clickEqualOperator = () => {
    calcularResultado();
  };
  return (
    <div className="col modifier-operator" onClick={clickEqualOperator}>
      <p className="modifier-caption">{simbolo}</p>
    </div>
  );
};

EqualOperator.propTypes = {
  simbolo: PropTypes.string.isRequired,
  calcularResultado: PropTypes.func.isRequired,
};

export default EqualOperator;
