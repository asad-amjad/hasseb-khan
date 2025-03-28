import React from 'react';
import { contactItems } from './constants';
// import { contactItems } from './constants';

const NavContactInfo = () => {
  return (
    <div className="flex items-center space-x-4">
      {contactItems.map((item, index) => (
        <a 
          key={index} 
          href={item.href} 
          className="flex items-center hover:opacity-80 transition-opacity"
        >
          {item.icon}
          <span className="ml-2">{item.text}</span>
        </a>
      ))}
    </div>
  );
};

export default NavContactInfo;