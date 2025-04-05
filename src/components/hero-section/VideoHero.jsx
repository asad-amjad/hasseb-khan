import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "../button/Button";
import ButtonSecondary from "../button/ButtonSecondary";
import Navbar from "../layout/navbar.jsx/Navbar";
import BannerVideo from "../../assets/hero-section/banner-video.mp4";

export default function VideoHero() {
  const navigate = useNavigate();

  const handleScrollToServices = () => {
    const section = document.getElementById("our-service");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative h-[97vh] md:h-[96vh] w-full flex flex-col md:mb-[150px]">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={BannerVideo} type="video/mp4" />
      </video>

      {/* Navbar */}
      <Navbar lightMode />

      {/* Overlay for readability (optional) */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      {/* Hero Content */}
      <section className="relative z-10 w-full max-w-[785px] px-5 md:px-0 mx-auto flex flex-col justify-center items-center text-center flex-grow gap-4">
        <h1 className="text-white text-[32px] md:text-[48px] font-bold leading-tight">
          Transform Your Health, Elevate Your Life
        </h1>
        <p className="body-2 text-white text-lg md:text-xl font-light">
          Discover a new you at PrimeMed – Istanbul’s leading destination for
          world-class facial and body aesthetic treatments. Our team of
          internationally trained specialists blends artistry with the latest in
          medical science to give you safe, personalized, and stunning results.
        </p>

        <div className="flex flex-col md:flex-row gap-4 w-full justify-center mt-10">
          <Button
            buttonText="Book Your Free Medical Consultation"
            onClick={() => navigate("/schedule-free-consultation")}
            className="px-20"
          />
          <ButtonSecondary
            buttonText="Discover Your Ideal Treatment Plan"
            onClick={handleScrollToServices}
            className="px-20"
          />
        </div>
      </section>
    </div>
  );
}
