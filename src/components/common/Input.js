/* eslint-disable import/prefer-default-export */
import React from 'react';
import { useField } from 'formik';

export const Input = ({ type, name, placeholder }) => {
  const [field, meta] = useField(name);

  return (
    <>
      <input
        {...field}
        type={type}
        name={field.name}
        placeholder={placeholder}
        className="appearance-none rounded-full border focus:border-orange-600 "
      />
      {meta.touched && meta.error ? <div>{meta.error} </div> : null}
    </>
  );
};
