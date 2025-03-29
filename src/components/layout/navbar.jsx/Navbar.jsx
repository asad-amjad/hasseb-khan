import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import logoWhite from "../../../assets/Logos/logo-white.png";
import logoBlack from "../../../assets/Logos/logo-black.png";
import { menuLinks } from "../../../constants/common";
import { Link } from "react-router-dom";

export default function Navbar({ lightMode = false }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="w-full flex items-center justify-between md:flex-col z-20 pt-[24px] px-4">
        {/* Logo */}
        <Link to={"/"}>
          <img
            src={lightMode ? logoWhite : logoBlack}
            alt="Prime Med Logo"
            className="hidden md:block w-[270px]"
          />
          <img
            src={lightMode ? logoWhite : logoBlack}
            alt="Prime Med Mobile Logo"
            className="w-[170px] md:hidden"
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open Menu"
          className="md:hidden text-3xl"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>

        {/* Desktop Navigation */}
        <div className="hidden w-full md:flex md:justify-center gap-4 lg:gap-5 pt-[24px]">
          {menuLinks.map(({ href, label }) => (
            <Link
              key={href}
              to={href}
              className={`${lightMode ? "text-[#FFFFFF]" : "text-black"}`}
            >
              <p className="body-2">{label}</p>
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          {/* Slide-in Panel */}
          <div className="fixed left-0 top-[40px] h-[98vh] w-[374px] bg-white  p-6 transform translate-x-0 transition-transform duration-300 ease-in-out">
            {/* Close Button */}
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close Menu"
              className="absolute top-0 right-0 text-2xl"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>

            {/* Logo */}
            <img
              src={lightMode ? logoWhite : logoBlack}
              alt="Prime Med Logo"
              className="w-[180px] mb-6"
            />

            {/* Menu Links */}
            <ul className="space-y-4">
              {menuLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    to={href}
                    className="text-black text-lg font-medium block border-b pb-2"
                    onClick={() => setMobileMenuOpen(false)} // Close menu on click
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
