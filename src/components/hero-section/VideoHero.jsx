import React, { useState } from "react";

import Button from "../button/Button";
import ButtonSecondary from "../button/ButtonSecondary";
import Navbar from "../layout/navbar.jsx/Navbar";

export default function VideoHero() {
  return (
    <>
      <div className="relative h-[97vh] md:h-[96vh] w-full flex flex-col">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            // src={BannerVideo}
            src={"/hero-section/banner-video.mp4"}
            type="video/mp4"
          />
        </video>

        {/* Navbar Component */}
        <Navbar lightMode />

        <section className="w-full max-w-[785px] px-[20px] md:px-0 mx-auto flex flex-col gap-2 text-center z-20 flex-grow justify-center items-center">
          <h1 className="text-white">
            Transform Your Health, Elevate Your Life
          </h1>
          <p className="body-2 text-white">
            Experience world-class medical care with cutting-edge treatments,
            expert specialists, and seamless healthcare solutions tailored to
            your needs.
          </p>

          <div className="flex flex-col gap-4 w-full md:flex-row md:justify-center mt-[60px]">
            <Button
              buttonText="Free Consultation"
              onClick={() => console.log("Clicked!")}
            />
            <ButtonSecondary
              buttonText="Find Your Procedure"
              onClick={() => console.log("Clicked!")}
            />
          </div>
        </section>
      </div>
    </>
  );
}
