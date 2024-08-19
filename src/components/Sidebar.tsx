import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CancelIcon } from './common';

const allRoutes = [
  {
    id: 'contact',
    name: 'Contact',
    href: '/',
  },
  {
    id: 'dashboard',
    name: 'Charts and Maps',
    href: '/dashboard',
  },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className='fixed md:hidden p-3 text-customRed'
        onClick={toggleSidebar}>
        ☰
      </button>

      <div
        className={`z-50 fixed top-0 left-0 w-60 p-3 md:relative flex flex-col gap-3 bg-gray-100 border border-r-gray-200 h-full transition-transform transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}>
        <div className='flex items-center justify-between'>
          <h1 className='text-3xl font-bold text-customRed'>Logo</h1>
          <CancelIcon
            onClick={toggleSidebar}
            className='text-customRed stroke-2 cursor-pointer md:hidden'
          />
        </div>
        <nav className='flex flex-col'>
          {allRoutes.map((route) => (
            <Link
              key={route.id}
              to={route.href}
              className='py-2 px-4 hover:bg-gray-200 rounded-md cursor-pointer'
              onClick={() => setIsOpen(false)} // Close the sidebar on mobile after a link is clicked
            >
              {route.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
