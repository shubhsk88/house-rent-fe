import React from 'react';

export const ButtonMain = ({ onClick,text }) => {
  return (
    <div>
      <button onClick={onClick} className="px-4 py-2 shadow-lg rounded">
        {text}
      </button>
    </div>
  );
};
