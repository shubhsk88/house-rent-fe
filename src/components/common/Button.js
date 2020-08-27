import React from 'react';

export const Button = ({
  type, text, onClick,
}) => (
  <button
    type={type}
    onClick={onClick}
    className="bg-orange-600 px-4 py-2  focus:outline-none hover:bg-orange-500 text-white rounded-full shadow-lg"
  >
    {text}
  </button>
);
