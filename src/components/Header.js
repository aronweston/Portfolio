import React from 'react';
import NavLink from './NavLink';

const Header = () => {
  return (
    <header className='bg-gray-900 fixed w-full top-0'>
      <div className='container mx-auto flex justify-between'>
        <NavLink
          className='inline-flex items-center py-1 px-1 my-3 text-white'
          to='/'>
          Home
        </NavLink>
        <nav className='flex'>
          <NavLink
            className='inline-flex items-center py-1 px-1 my-3 text-white'
            to='/projects'>
            Projects
          </NavLink>
          <NavLink
            className='inline-flex items-center py-1 px-1 my-3 text-white'
            to='/about'>
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
