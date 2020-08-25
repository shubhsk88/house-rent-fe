import React from 'react';

export const Button = ({ type, text, onClick, size }) => (
  <button
    type={type}
    onClick={onClick}
    className="bg-orange-500 text-white rounded-full shadow-lg"
  >
    {text}
  </button>
);
