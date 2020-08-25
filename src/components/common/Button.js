import React from 'react';

const Button = ({ type, text }) => (
  <button
    type={type}
    className="bg-orange-500 text-white rounded-full shadow-lg"
  >
    {text}
  </button>
);

export default Button;
