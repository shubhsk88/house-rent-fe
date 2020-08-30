/* eslint-disable import/prefer-default-export */
import React from 'react';
import ReactLoading from 'react-loading';

export const Loading = () => (
  <div className="w-screen h-screen flex flex-col justify-center items-center">
    <ReactLoading color="#333" type="balls" />
    <div className="text-xl">Loading</div>
  </div>
);
