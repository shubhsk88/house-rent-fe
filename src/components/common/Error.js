/* eslint-disable import/prefer-default-export */
import React from 'react';
import PropTypes from 'prop-types';

export const Error = ({ text }) => (
  <div className="w-screen h-screen flex justify-center items-center">
    <div className="text-4xl">{text}</div>
  </div>
);

Error.propTypes = {
  text: PropTypes.string.isRequired,
};
