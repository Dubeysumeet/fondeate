import React, { useState, useEffect } from 'react';

const Followers = () => {
    const [activeSection, setActiveSection] = useState('followers');

  return (
    <div className=" w-4/5 my-10  mx-auto right-card">
    <div className="">
      <div className="flex mb-6 justify-center">
        <button
          onClick={() => setActiveSection('followers')}
          className={`px-4 py-2 mr-2 rounded ${activeSection === 'followers' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
        <span className="text-lg font-medium">{activeSection === 'followers' ? 'Followers (0)' : 'Following (0)'}</span>
        </button>
        <button
          onClick={() => setActiveSection('following')}
          className={`px-4 py-2 rounded ${activeSection === 'following' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
           <span className="text-lg font-medium">{activeSection === 'following' ? 'Following (0)' : 'Following (0)'}</span>
        </button>
      </div>
      {activeSection === 'followers' && (
        <div>
          <p className="text-gray-600">Find investors to coinvest with</p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Explore Top Investors
          </button>
        </div>
      )}
      {activeSection === 'following' && (
        <div>
          <p className="text-gray-600">Content for Following</p>
        </div>
      )}
    </div>
  </div>
  )
}

export default Followers