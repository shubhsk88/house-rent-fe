/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Link } from 'react-router-dom';

const LoginButton = () => (
  <div className="flex justify-between">
    <Link
      to="/login"
      className="px-4 py-2 shadow-lg hover:bg-orange-500 rounded"
    >
      Login
    </Link>
    <Link
      to="/signup"
      className="px-4 py-2 shadow-lg hover:bg-orange-500 rounded"
    >
      Signup
    </Link>
  </div>
);
export { LoginButton };
