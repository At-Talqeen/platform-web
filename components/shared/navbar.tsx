
import Logo from '@/assets/logo.svg'

import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 md:px-12">
      <Logo/>
    <div className="hidden md:flex items-center space-x-8">
      <a href="#" className="text-gray-600 hover:text-gray-900">Features</a>
      <a href="#" className="text-gray-600 hover:text-gray-900">Programs</a>
      <a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a>
      <a href="#" className="text-gray-600 hover:text-gray-900">Help</a>
    </div>

    <div className="flex items-center space-x-4">
      <button className="hidden md:block text-gray-600 hover:text-gray-900">Login</button>
      <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
        Sign Up
      </button>
    </div>
  </nav>
  )
};


export default Navbar;
