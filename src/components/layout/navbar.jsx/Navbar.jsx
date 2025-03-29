import React, { useState } from "react";
import { createPortal } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import logoWhite from "../../../assets/Logos/logo-white.png";
import logoBlack from "../../../assets/Logos/logo-black.png";
import { menuLinks } from "../../../constants/common";
import { Link } from "react-router-dom";
import TopHeader from "../top-header/TopHeader";

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

      {/* Mobile Menu Full-Screen */}
      {mobileMenuOpen &&
        createPortal(
          <div className="fixed z-50 flex justify-end">
            {/* Slide-in Panel */}
            <div className="fixed inset-0 bg-white   flex flex-col items-start transition-transform duration-300 ease-in-out">
              <TopHeader />
              {/* Close Button */}
              <button
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close Menu"
                className="absolute top-[70px] right-5 text-2xl"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>

              {/* Logo */}
              <Link to={"/"}>
                <img
                  src={logoBlack}
                  alt="Prime Med Logo"
                  className="w-[170px] my-[24px] ms-[16px] z-[200]"
                />
              </Link>
              {/* Menu Links */}
              <ul className="space-y-4 w-full px-[16px] mt-[30px]">
                {menuLinks.map(({ href, label }) => (
                  <li key={href} className="w-full">
                    <Link
                      to={href}
                      className="text-black text-lg font-medium block border-b pb-4 w-full text-left"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>,
          document.body // Renders outside the Navbar for full-screen effect
        )}
    </>
  );
}
