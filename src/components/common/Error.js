import React from 'react';

export const Error = ({ text }) => (
  <div className="w-screen h-screen flex justify-center items-center">
    <div className="text-4xl">{text}</div>
  </div>
);
