import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

const Layout = ({ children, title }) => {
  return (
    <>
      <Header />
      <Main>
        <title>{title}</title>
        {children}
      </Main>
      <Footer />
    </>
  );
};

export default Layout;
