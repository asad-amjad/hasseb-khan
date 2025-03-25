import React from 'react';

const PrimemedIstanbul = () => {
  return (
    <div className="relative h-screen bg-gradient-to-r from-yellow-100 to-pink-100">
      {/* Background Image (assuming you have the image in your public/images folder) */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('/images/primemed-istanbul-bg.jpg')` }}>
        <div className="absolute inset-0 bg-black opacity-20"></div> {/* Dark overlay for better text readability */}
      </div>

      {/* Header */}
      <header className="relative z-10 p-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/images/primemed-logo.png" alt="Primemed Istanbul Logo" className="h-12 mr-4" />
          <span className="text-xl font-semibold text-gray-800">PRIMEMED ISTANBUL</span>
        </div>
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="text-gray-700 hover:text-gray-900">About Us</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Gastric Sleeves</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Rhinoplasty</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Tummy Tuck (BBL)</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Hair Transplant</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Oncology</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Orthopedics</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Contact Us</a>
        </nav>
        {/* Mobile menu button (you might want to add functionality for toggling the menu) */}
        <button className="md:hidden">
          <svg className="h-6 w-6 text-gray-700" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </header>

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">FEEL YOU BEST</h1>
        <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-8">LOOK YOUR BEST</h2>
        <p className="text-lg text-gray-700 mb-8 px-4 md:px-0">
          Our acknowledged surgeons and bestheticians provide advanced and innovative techniques for both surgical and non-surgical solutions in Turkey.
        </p>
        <div className="flex space-x-4">
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">Free Consultation</button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Find Your Procedure</button>
        </div>
      </div>

      {/* Floating Chat Icon (you might need to adjust positioning based on your design) */}
      <div className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white rounded-full p-3 z-20">
        <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M8 10h.01M12 10h.01M16 10h.01M9 16V13M12 16V13M15 16V13M21 12c0 4.5-4.03 8.2-9 8.2S3 16.5 3 12c0-4.5 4.03-8.2 9-8.2S21 7.5 21 12z"></path>
        </svg>
      </div>
    </div>
  );
};

export default PrimemedIstanbul;