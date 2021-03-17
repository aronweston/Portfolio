import { Link } from 'gatsby';
import React from 'react';

const Button = ({ to, children }) => {
  return (
    <Link to={to}>
      <button class='inline-flex items-center mt-4 px-3 py-2 text-black bg-white rounded font-bold text-md'>
        {children}
      </button>
    </Link>
  );
};

export default Button;
