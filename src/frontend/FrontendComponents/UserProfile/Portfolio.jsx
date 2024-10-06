import React from 'react'

const Portfolio = () => {
  return (
    <div className="w-3/5 my-10 right-card mx-auto">
    <h2 className="text-xl font-semibold mb-4">Portfolio Balance</h2>
    <div className="">
      <div className="flex justify-between mb-4">
        <span className="font-medium text-gray-700">Estimated Value:</span>
        <span className="text-lg font-bold">$x</span>
      </div>
      <div className="flex justify-between mb-4">
        <span className="font-medium text-gray-700">Invested:</span>
        <span className="text-lg font-bold">$y</span>
      </div>
      <div className="flex justify-between mb-4">
        <span className="font-medium text-gray-700">Unrealized:</span>
        <span className="text-lg font-bold">$z</span>
      </div>
      <div className="flex justify-between mb-4">
        <span className="font-medium text-gray-700">Realized:</span>
        <span className="text-lg font-bold">$w</span>
      </div>
    </div>
  </div>
  )
}

export default Portfolio