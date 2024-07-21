import React from 'react'
import { NavLink } from 'react-router-dom';

const UnauthUsers = () => {
  return (
    <div>
    <NavLink to="/login" className="text-gray-700 hover:text-gray-900 hover:underline px-3 py-2 rounded-md text-sm font-medium">Login</NavLink>
<NavLink to="/signup" className="text-gray-700 hover:text-gray-900 hover:underline px-3 py-2 rounded-md text-sm font-medium ml-4">Sign Up</NavLink>
  </div>
  )
}

export default UnauthUsers