/* eslint-disable import/prefer-default-export */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

export const Label = ({ text }) => (
  <label className="text-md font-semibold text-gray-700">{text}</label>
);

Label.propTypes = {
  text: PropTypes.string.isRequired,
};
