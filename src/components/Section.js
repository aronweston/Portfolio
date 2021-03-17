import React from 'react';

const Section = ({ children, bg = 'transparent', bgWeight = '100' }) => {
  return (
    <section
      className={`bg-${bg}-${bgWeight} w-full h-100 flex justify-center`}>
      {children}
    </section>
  );
};

export default Section;
