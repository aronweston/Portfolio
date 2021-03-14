import React from 'react';

const Main = ({ children }) => {
  return (
    <main className='container max-w-screen-large mx-auto mb-auto'>
      {children}
    </main>
  );
};

export default Main;
