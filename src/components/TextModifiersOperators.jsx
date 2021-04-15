/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// se desactivaron las reglas que no dejan que funcionen los botones
import React from 'react';
import PropTypes from 'prop-types';

const TextModifiersOperator = ({ simbolo, modifyScreen }) => {
  const clickOperatorListener = () => {
    modifyScreen(simbolo);
  };
  return (
    <div className="col modifier-operator-1" onClick={clickOperatorListener}>
      <p className="modifier-caption-1">{simbolo}</p>
    </div>
  );
};

TextModifiersOperator.propTypes = {
  simbolo: PropTypes.string.isRequired,
  modifyScreen: PropTypes.func.isRequired,
};

export default TextModifiersOperator;
