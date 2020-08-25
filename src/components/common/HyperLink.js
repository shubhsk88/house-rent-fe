import React from 'react';

import { Link } from 'react-router-dom';

export const HyperLink = ({ text, to }) => (
  <Link
    to={to}
    className="font-medium text-blue-500 hover:text-blue-600 focus:outline:none focus:underline transition ease-in-out duration-100"
  >
    {text}
  </Link>
);
