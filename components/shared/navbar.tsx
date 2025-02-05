
import Logo from '@/assets/logo.svg'

import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 md:px-12 lg:px-16 xl:px-[80px] 2xl:px-[100px] absolute top-2 w-full z-30 ">
      <Logo/>
    <div className="hidden lg:flex items-center space-x-8">
      <a href="#features" className="text-[#101828] font-normal hover:text-gray-900 font-inter ">Features</a>
      <a href="#benefits" className="text-[#101828] font-normal hover:text-gray-900 font-inter ">Benefits</a>
      <a href="#pricing" className="text-[#101828] font-normal hover:text-gray-900 font-inter ">Pricing</a>
      <a href="#faqs" className="text-[#101828] font-normal hover:text-gray-900 font-inter ">FAQs</a>
    </div>

    <div className=" items-center space-x-4 hidden lg:flex">
      <button className="bg-[#0DAC5C] text-white p-3 rounded-[8px] hover:bg-green-700  font-semibold w-[124px]">
       Enroll Now
      </button>
    </div>
  </nav>
  )
};


export default Navbar;
