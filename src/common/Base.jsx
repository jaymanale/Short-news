import React from 'react';

import Navbar from './Navbar';

const Base = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="mt-3">{children}</div>
    </div>
  );
};

export default Base;
