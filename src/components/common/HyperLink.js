/* eslint-disable import/prefer-default-export */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const HyperLink = ({ text, to }) => (
  <Link
    to={to}
    className="font-medium text-blue-500 hover:text-blue-600 focus:outline:none focus:underline transition ease-in-out duration-100"
  >
    {text}
  </Link>
);

HyperLink.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};
