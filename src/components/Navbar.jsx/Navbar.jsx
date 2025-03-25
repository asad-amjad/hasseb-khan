// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-800">LOGOIPSUM</div>
        
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-800 hover:text-blue-600">Home</a>
          <a href="#" className="text-gray-800 hover:text-blue-600">About Us</a>
          <a href="#" className="text-gray-800 hover:text-blue-600">Services</a>
          <a href="#" className="text-gray-800 hover:text-blue-600">Contact Us</a>
        </div>
        
        <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
          Free Consultation
        </button>
      </div>
    </nav>
  );
};

export default Navbar;