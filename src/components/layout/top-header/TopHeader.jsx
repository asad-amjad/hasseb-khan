import React from "react";

import PhoneIcon from "../../icons/PhoneIcon";
import MailIcon from "../../icons/MailIcon";
import FacebookIcon from "../../icons/FacebookIcon";
import LinkedIn from "../../icons/LinkedInIcon";
import XIcon from "../../icons/XIcon";
import InstagramIcon from "../../icons/InstagramIcon";
import YoutubeIcon from "../../icons/YoutubeIcon";

import engWave from "../../../assets/flag-icons/eng.png";
import espWave from "../../../assets/flag-icons/esp.png";
import ksaWave from "../../../assets/flag-icons/ksa.png";
import rusWave from "../../../assets/flag-icons/rus.png";

export default function TopHeader() {
  return (
    <div className="bg-[#1F385F] md:px-[100px] h-[35px] w-full px-[16px] md:h-[37px] flex justify-between items-center">
      <div className="hidden md:flex gap-[80px] items-center">
        <div className="flex items-center justify-center gap-2">
          <PhoneIcon />
          <p className="small text-[#FFF]">+44 745 9360 750</p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <MailIcon />
          <p className="small text-[#FFF]">infor@infor.com</p>
        </div>
      </div>

      <div className="flex gap-[80px] items-center w-full md:w-1/3 justify-between md:justify-end">
        {/* Language Dropdown */}
        <div className="flex items-center gap-[20px]">
          <img src={espWave} alt="flagImage" />
          <img src={rusWave} alt="flagImage" />
          <img src={engWave} alt="flagImage" />
          <img src={ksaWave} alt="flagImage" />
        </div>

        {/* Social Icons */}
        <div className="flex gap-[20px]">
          <FacebookIcon />
          {/* <LinkedIn /> */}
          {/* <XIcon /> */}
          <InstagramIcon />
          {/* <YoutubeIcon /> */}
        </div>
      </div>
    </div>
  );
}
