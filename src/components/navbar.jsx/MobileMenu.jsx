import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { createPortal } from "react-dom";
import logo from "../../assets/Logos/LogoBlue.png";
import { menu } from "./menu";

export default function MobileMenu({ onClose }) {
  return createPortal(
    <div className="fixed inset-0 bg-white h-screen w-full z-20 flex flex-col">
      {/* Header */}
      <div className="bg-[#1F385F] w-full flex items-center justify-between px-4 py-2">
        <img
          src={logo}
          alt="prime-med-logo"
          className="w-[100px] md:w-[120px] h-[100px] md:h-[120px] object-contain"
        />
        <button onClick={onClose} className="text-white text-3xl">
          <FontAwesomeIcon icon={faX} />
        </button>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-col gap-3 mt-6 px-6">
        {menu.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-[#111] font-sans font-[400] py-[10px] text-base md:text-[14px] lg:text-[16px] hover:text-[#1F385F] transition-colors border-b border-b-2 border-grey-800"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>,
    document.getElementById("portal-root")
  );
}
