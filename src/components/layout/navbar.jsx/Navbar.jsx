import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logoWhite from "../../../assets/Logos/logo-white.png";
import logoBlack from "../../../assets/Logos/logo-black.png";
import { menuLinks } from "../../../constants/common";
import { Link } from "react-router-dom";

export default function Navbar({ setMobileMenu, lightMode = false }) {
  return (
    <nav className="w-full flex items-center justify-between md:flex-col z-20 pt-[24px] px-4">
      {/* Mobile Logo (Hidden on Desktop) */}
      <Link to={"/"}>
        <img
          src={lightMode ? logoWhite : logoBlack}
          alt="Prime Med Mobile Logo"
          className="hidden md:block w-[270px]"
        />

        {/* Desktop Logo (Hidden on Mobile) */}
        <img
          src={lightMode ? logoWhite : logoBlack}
          alt="Prime Med Desktop Logo"
          className="w-[170px] md:hidden"
        />
      </Link>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenu(true)}
        aria-label="Open Menu"
        className="md:hidden text-white text-3xl"
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      {/* Desktop Navigation */}
      <div className="hidden w-full md:flex md:justify-center gap-[60px] md:items-center md:gap-4 lg:gap-5 pt-[24px]">
        {menuLinks.map(({ href, label }) => (
          <Link
            key={href}
            to={href}
            className={`${lightMode && "text-[#FFFFFF]"}`}
          >
            <p className="body-2">{label}</p>
          </Link>
        ))}
      </div>
    </nav>
  );
}
