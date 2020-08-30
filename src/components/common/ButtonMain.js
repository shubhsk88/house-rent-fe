/* eslint-disable import/prefer-default-export */
import React from 'react';
import PropTypes from 'prop-types';

export const ButtonMain = ({ onClick, text }) => (
  <div>
    <button
      type="button"
      onClick={onClick}
      className="px-4 py-2 border shadow-xl hover:bg-orange-500 rounded"
    >
      {text}
    </button>
  </div>
);

ButtonMain.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
