/* eslint-disable import/prefer-default-export */
import React from 'react';
import { useField } from 'formik';
import PropTypes from 'prop-types';

export const Input = ({ type, name, placeholder }) => {
  const [field, meta] = useField(name);

  return (
    <>
      <input
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...field}
        type={type}
        name={field.name}
        placeholder={placeholder}
        className="appearance-none  p-2 focus:rounded-full rounded-full border focus:outline-none border-gray-200 focus:border-orange-700 focus:text-orange-600 "
      />
      {meta.touched && meta.error ? (
        <div>
          {meta.error}
          {' '}
        </div>
      ) : null}
    </>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};
