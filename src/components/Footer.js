import React from 'react';
import { Link } from 'gatsby';

const Footer = () => {
  return (
    <footer className='py-6 w-full bg-yellow-200 text-gray-900 text-center p-5'>
      {/* <div className='flex justify-center'>
        <h1>Hello</h1>
      </div> */}
      <nav className='m-5'>
        <Link to='/'>Link </Link>
        <Link to='/login'>Link </Link>
      </nav>
      <div className='mx-auto text-xs text-center'>© 2020, Copyright.</div>
    </footer>
  );
};

export default Footer;
