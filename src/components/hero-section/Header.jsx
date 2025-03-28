const Header = () => {
    return (
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
        <button className="md:hidden">
          <svg className="h-6 w-6 text-gray-700" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </header>
    );
  };
  
  export default Header;