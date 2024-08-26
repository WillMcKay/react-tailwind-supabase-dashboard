import React from 'react';
import Breadcrumb from './Breadcrumb';

const Navbar = () => {
  return (
    <header className="bg-secondary p-4 border-b border-gray-300 sticky top-0 z-10 flex justify-between items-center">
      <div>
        <Breadcrumb />
        <div className="text-xl font-semibold text-white mt-1">Current Page</div>
      </div>
      <div className="text-lg font-semibold text-gray-800">
        Hello, User
      </div>
    </header>
  );
};

export default Navbar;
