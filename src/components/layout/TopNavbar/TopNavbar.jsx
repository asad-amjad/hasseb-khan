import React from 'react';
import PropTypes from 'prop-types';
import NavContactInfo from './NavContactInfo';
import NavIcons from './NavIcons';

const TopNavbar = ({ bgColor = 'bg-[#1F385F]', textColor = 'text-white' }) => {
  return (
    <div className={`${bgColor} ${textColor} py-2 px-6`}>
      <div className="container mx-auto flex justify-between items-center">
        <NavContactInfo />
        <NavIcons />
      </div>
    </div>
  );
};

TopNavbar.propTypes = {
  bgColor: PropTypes.string,
  textColor: PropTypes.string
};

export default TopNavbar;