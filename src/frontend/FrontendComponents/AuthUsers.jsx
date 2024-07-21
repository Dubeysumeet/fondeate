import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, Settings, Edit, User, Folder, Heart, LogOut } from "lucide-react";
import { NavLink } from 'react-router-dom';

const AuthUsers = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      <div className="pr-5">
       <NavLink to='/notification'>  <Bell /> </NavLink>
      </div>
      <div 
        className="relative"
        onMouseEnter={() => setDropdownOpen(true)}
        onMouseLeave={() => setDropdownOpen(false)}
      >
        <NavLink to="/profile">
        <Avatar>
          <AvatarImage src="/profile" />
          <AvatarFallback>SD</AvatarFallback>
        </Avatar>
        </NavLink>
        {dropdownOpen && (
          <div className="absolute -right-3 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10" >
             <a href="/portfolio" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
              <Folder className="w-5 h-5 mr-2" />
              Portfolio
            </a>
            <a href="/followers" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
              <User className="w-5 h-5 mr-2" />
              Followers
            </a>
            <a href="/investorupdates" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
              <Bell className="w-5 h-5 mr-2" />
              Investor Updates
            </a>
            <a href="/finvestorupdates" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
              <Heart className="w-5 h-5 mr-2" />
              Whishlsit
            </a>
            <a href="/accountsettings" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
              <Settings className="w-5 h-5 mr-2" />
              Account
            </a>
            <a href="/edit-profile" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
              <Edit className="w-5 h-5 mr-2" />
              Edit
            </a>
            <a href="/" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
              <LogOut className="w-5 h-5 mr-2" />
              Logout
            </a>
          </div>
        )}
      </div>
    </>
  );
}

export default AuthUsers;
