import React from 'react';
import { iconItems } from './constants';

const NavIcons = () => {
  return (
    <div className="flex items-center space-x-4">
      <div className="flex items-center">
        <span className="text-sm">ENG</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      {iconItems.map((item, index) => (
        <a 
          key={index} 
          href={item.href} 
          className="flex items-center hover:opacity-80 transition-opacity"
          aria-label={item.label}
        >
          {item.icon}
        </a>
      ))} 
    </div>
  );
};

export default NavIcons;