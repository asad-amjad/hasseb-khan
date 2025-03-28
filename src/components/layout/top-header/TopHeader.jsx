import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTiktok,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import espWave from "../../../assets/Flags/espWave.png";
import rusWave from "../../../assets/Flags/rusWave.png";
import engWave from "../../../assets/Flags/engWave.png";
import ksaWave from "../../../assets/Flags/ksaWave.png";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function TopHeader() {
  return (
    <div className="w-full bg-[#1F385F] px-2 flex justify-between items-center h-5 py-5">
      <div className="hidden items-center md:flex  sm:w-2/5 md:justify-around md:gap-4  lg:gap-2 ">
        <div className="w-1/2 flex items-center justify-center gap-2">
          <FontAwesomeIcon icon={faPhone} className="text-white text-sm" />
          <p className="text-[#F4F6F9] sm:text-[10px] md:text-[12px] lg:text-[13px] text-sans tracking-wide">
            +44 745 9360 750
          </p>
        </div>
        <div className="w-1/2 flex items-center justify-center gap-2">
          <FontAwesomeIcon icon={faEnvelope} className="text-white text-sm" />
          <p className="text-[#F4F6F9]  sm:text-[10px]  md:text-[12px] lg:text-[13px] text-sans tracking-wide ">
            abdull.haseebkhan@gmail.com
          </p>
        </div>
      </div>
      <div className="w-full h-6 flex justify-between items-center md:w-2/5 md:justify-around">
        <div className="w-2/5 sm:1/5 md:w-2/4 lg:w-1/4  h-6 flex justify-around items-center gap-3">
          <div className="object-contain flex items-center">
            <img src={espWave} alt="flagImage" />
          </div>
          <div className=" object-contain flex items-center">
            <img src={rusWave} alt="flagImage" />
          </div>
          <div className=" object-contain flex items-center">
            <img src={engWave} alt="flagImage" />
          </div>
          <div className=" object-contain flex items-center">
            <img src={ksaWave} alt="flagImage" />
          </div>
        </div>
        <div className="w-2/5 sm:1/5 md:w-2/4 lg:w-1/4 h-6 flex justify-around items-center ">
          <FontAwesomeIcon icon={faFacebook} className="text-white text-sm" />
          <FontAwesomeIcon icon={faTiktok} className="text-white text-sm" />
          <FontAwesomeIcon icon={faInstagram} className="text-white text-sm" />
          <FontAwesomeIcon icon={faYoutube} className="text-white text-sm" />
        </div>
      </div>
    </div>
  );
}
