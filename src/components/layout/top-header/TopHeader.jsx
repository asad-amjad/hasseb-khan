import React from "react";

import PhoneIcon from "../../icons/PhoneIcon";
import MailIcon from "../../icons/MailIcon";
import FacebookIcon from "../../icons/FacebookIcon";
import LinkedIn from "../../icons/LinkedInIcon";
import XIcon from "../../icons/XIcon";
import InstagramIcon from "../../icons/InstagramIcon";
import YoutubeIcon from "../../icons/YoutubeIcon";
import DownIcon from "../../icons/DownIcon";

import espWave from "../../../assets/flags/espWave.png";
import rusWave from "../../../assets/Flags/rusWave.png";
import engWave from "../../../assets/Flags/engWave.png";
import ksaWave from "../../../assets/Flags/ksaWave.png";

export default function TopHeader() {
  return (
    <div className="bg-[#1F385F] md:px-[100px] h-[35px] w-full px-[16px] md:h-[37px] flex justify-between items-center">
      <div className="hidden md:flex gap-[80px] items-center">
        <div className="flex items-center justify-center gap-2">
          <PhoneIcon />
          <p className="small text-[#FFF]">+971 62 123 4567</p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <MailIcon />
          <p className="small text-[#FFF]">info@domainname.com</p>
        </div>
      </div>

      <div className="flex gap-[80px] items-center  w-full md:w-[364px] justify-between md:justify-start">
        {/* Language Dropdown */}
        <div className="flex items-center gap-[20px]">
          <div className="">
            <img src={espWave} alt="flagImage" />
          </div>
          <div className="">
            <img src={rusWave} alt="flagImage" />
          </div>
          <div className="">
            <img src={engWave} alt="flagImage" />
          </div>
          <div className="">
            <img src={ksaWave} alt="flagImage" />
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex gap-[20px]">
          <FacebookIcon />
          <LinkedIn />
          <XIcon />
          <InstagramIcon />
          <YoutubeIcon />
        </div>
      </div>
    </div>
  );
}
