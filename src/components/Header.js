import React from 'react';
import Menu from './Menu';
import NavLink from './NavLink';
import { GithubIcon, LinkedInIcon, Logo } from './Styles';

const Header = () => {
  return (
    <>
      <header className='bg-yellow-200 p-2 fixed w-full z-10 top-0'>
        <div className='container mx-auto flex justify-between text-gray-900'>
          <NavLink className='inline-flex items-center py-1 px-1 my-3' to='/'>
            <Logo />
          </NavLink>
          <nav className='flex'>
            <NavLink
              className='inline-flex items-center py-1 px-1 my-3 '
              to='/projects'>
              Projects
            </NavLink>
            <NavLink
              className='inline-flex items-center py-1 px-1 my-3'
              to='/about'>
              About
            </NavLink>
            <NavLink
              className='inline-flex items-center py-1 px-1 my-3'
              to='https://github.com/aronweston'>
              <GithubIcon />
            </NavLink>
            <NavLink
              className='inline-flex items-center py-1 px-1 my-3'
              to='https://github.com/aronweston'>
              <LinkedInIcon />
            </NavLink>
          </nav>
        </div>
      </header>
      {/* <Menu /> */}
    </>
  );
};

export default Header;
