import React, { useState } from 'react';
import logo from '../../assets/images/IMG_1969.png';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isChevronUp, setIsChevronUp] = useState(false);

  const toggleChevron = (direction) => {
    setIsChevronUp(direction === 'up');
  };

  return (
    <header className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <NavLink to="/home" className="flex-shrink-0">
              <img className="h-20 w-auto" src={logo} alt="Fondeate logo" />
            </NavLink>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <NavLink to="/explore" className="text-gray-700 hover:text-gray-900 hover:underline px-3 py-2 rounded-md text-sm font-medium">Explore</NavLink>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <i className="fa fa-search text-gray-500"></i>
                  </span>
                  <input type="text" className="border rounded-md pl-8 pr-2 py-1 focus:outline-none focus:border-blue-500" placeholder="Search" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <NavLink to="/raise" className="text-gray-700 hover:text-gray-900 hover:underline px-3 py-2 rounded-md text-sm font-medium">Raise Money</NavLink>
                <div className="relative ml-3">
                  <div className="cursor-pointer flex items-center gap-1" onMouseEnter={() => toggleChevron('up')} onMouseLeave={() => toggleChevron('down')}>
                    <span className="text-gray-700 hover:text-gray-900 hover:underline">Learn</span>
                    <i id="learn-icon" className={`fa fa-chevron-${isChevronUp ? 'up' : 'down'} text-lg`}></i>
                  </div>
                  <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 hidden group-hover:block">
                    <NavLink to="/#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:underline">FAQ for Investors</NavLink>
                    <NavLink to="/#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:underline">Investor School</NavLink>
                    <NavLink to="/#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:underline">FAQ for Founders</NavLink>
                    <NavLink to="/#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:underline">Fundraising Playbook</NavLink>
                    <NavLink to="/#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:underline">Blog</NavLink>
                    <NavLink to="/#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:underline">Earn up to $10,000</NavLink>
                  </div>
                </div>
                <span className="mx-3 h-6 w-px bg-gray-300"></span>
                <NavLink to="/login" className="text-gray-700 hover:text-gray-900 hover:underline px-3 py-2 rounded-md text-sm font-medium">Login</NavLink>
                <NavLink to="/signup" className="text-gray-700 hover:text-gray-900 hover:underline px-3 py-2 rounded-md text-sm font-medium ml-4">Sign Up</NavLink>
              </div>
            </div>
            <div className="ml-4 md:hidden">
              <button className="text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900">
                <i className="fa fa-bars text-2xl"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
