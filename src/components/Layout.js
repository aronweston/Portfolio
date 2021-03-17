import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

const Layout = ({ children, title }) => {
  return (
    <div className='flex flex-col h-screen justify-between'>
      <Header />
      <Main>
        <title>{title}</title>
        {children}
      </Main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
