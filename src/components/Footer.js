import React from 'react';
import { Link } from 'gatsby';

const Footer = () => {
  return (
    <footer className='py-6 w-full bg-red-700 text-white text-center p-5'>
      <div className='flex justify-center'>
        <h1>Hello</h1>
      </div>
      <nav className='m-5'>
        <Link to='/'>Shop • </Link>
        <Link to='/login'>Login • </Link>
        <Link to='/register'>Register • </Link>
        <Link to='/register'>Checkout </Link>
      </nav>
      <div className='mx-auto text-xs text-center'>© 2020, Copyright.</div>
    </footer>
  );
};

export default Footer;
