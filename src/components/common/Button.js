/* eslint-disable react/button-has-type */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import PropTypes from 'prop-types';

const fun = () => {};
export const Button = ({ type, text, onClick }) => (
  <button
    type={type}
    onClick={onClick}
    className="bg-orange-600 px-4 py-2  focus:outline-none hover:bg-orange-500 text-white rounded-full shadow-lg"
  >
    {text}
  </button>
);

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: fun,
};
