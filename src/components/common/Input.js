import React from 'react';

const Input = ({ type, name, placeholder }) => (
  <input
    type={type}
    name={name}
    placeholder={placeholder}
    className="appearance-none rounded-full border focus:border-orange-600 "
  />
);

export default Input;
