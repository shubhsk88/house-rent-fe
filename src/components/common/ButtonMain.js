import React from 'react';

export const ButtonMain = ({ onClick, text }) => (
  <div>
    <button
      onClick={onClick}
      className="px-4 py-2 border shadow-xl hover:bg-orange-500 rounded"
    >
      {text}
    </button>
  </div>
);
