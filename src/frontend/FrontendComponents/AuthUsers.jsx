import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, Settings, Edit, User, Folder, Heart, LogOut } from "lucide-react";
import { NavLink } from 'react-router-dom';

const AuthUsers = () => {
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [notificationDropdownOpen, setNotificationDropdownOpen] = useState(false);

  const toggleNotificationDropdown = () => {
    setNotificationDropdownOpen(!notificationDropdownOpen);
  };

  const markAllAsRead = () => {
    console.log('Marked all as read');
  };

  return (
    <>
      <div className="relative pr-5">
        <button onClick={toggleNotificationDropdown}>
          <Bell className='align-middle' size={18}/>
        </button>
        {notificationDropdownOpen && (
          <div className="absolute right-0 mt-2 w-80 bg-white shadow-lg rounded-lg z-20">
            <div className="p-4 border-b flex justify-between items-center">
              <span className="text-base font-semibold">Notifications</span>
              <button onClick={markAllAsRead} className="text-blue-800">Mark all as read</button>
            </div>
            <div className="p-4">
              <div className="mb-2 text-center">Notification 1</div>
            </div>
          </div>
        )}
      </div>
      <div 
        className="relative"
        onMouseEnter={() => setProfileDropdownOpen(true)}
        onMouseLeave={() => setProfileDropdownOpen(false)}
      >
        <NavLink to="/profile">
          <Avatar>
            <AvatarImage src="/profile" />
            <AvatarFallback>SD</AvatarFallback>
          </Avatar>
        </NavLink>
        {profileDropdownOpen && (
          <div className="absolute -right-3 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
            <a href="/userprofile/portfolio" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
              <Folder className="w-5 h-5 mr-2" />
              Portfolio
            </a>
            <a href="/userprofile/followers" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
              <User className="w-5 h-5 mr-2" />
              Followers
            </a>
            <a href="/#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
              <Bell className="w-5 h-5 mr-2" />
              Investor Updates
            </a>
            <a href="/userprofile/watchlist" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
              <Heart className="w-5 h-5 mr-2" />
              Wishlist
            </a>
            <a href="/userprofile/account" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
              <Settings className="w-5 h-5 mr-2" />
              Account
            </a>
            <a href="/profile" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
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
