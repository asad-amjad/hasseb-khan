import React, { useState } from "react";

import Navbar from "../layout/navbar.jsx/Navbar";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import BannerImage from "../../assets/hero-section/banner-image.png";

export default function PageHero({ title, description }) {
  return (
    <>
      <div className="relative  w-full flex flex-col">
        <img
          src={BannerImage}
          alt="review-pfp"
          // className="w-[50px] h-[50px] rounded-[100%]"
          className="absolute inset-0 w-full h-full z-0"
        />

        {/* Navbar Component */}
        <Navbar />

        <Breadcrumb title={title} description={description} />
      </div>
    </>
  );
}
