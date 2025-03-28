import React from "react";
import Breadcrumb from "../components/Breadcrumbs/Breadcrumb";
import WhatWeOffer from "../components/what-we-offer/WhatWeOffer";
import Button from "../components/button/Button";
import TopNavbar from "../components/layout/TopNavbar";
import SectionOne from "../components/layout/header/NavigationMenu";
// import Navbar from "../components/navbar.jsx/TopNavbar";

const Services = () => {
  const benefits = [
    "Improved Facial Symmetry – Balanced and natural-looking contours.",
    "Youthful Appearance – Reduce fine lines and wrinkles.",
    "Enhanced Skin Texture – Smoother, firmer skin.",
    "Volume Restoration – Replenish lost facial volume.",
    "Non-Invasive Options – Quick recovery with minimal downtime.",
    "Long-Lasting Results – Sustainable improvements for a fresh look.",
  ];
  return (
    <>
      <TopNavbar />
      <SectionOne />

      <Breadcrumb
        title="FACIAL AESTHETICS"
        description="Enhance facial harmony, symmetry, and youthful appearance with advanced aesthetic procedures designed to refine features, restore volume, and improve skin texture."
      />

      <div className="flex justify-center w-full bg-inherit mt-[100px]">
        <img
          src="/services/image-1.png"
          alt="Clinic Interior"
          className=" w-full max-w-[1312px] max-h-[484px] object-cover"
        />
      </div>

      <WhatWeOffer
        badge="What we offer"
        title="REFINE, REJUVENATE & RESTORE"
        description="Our expert facial aesthetic treatments include contouring, skin tightening, and volume restoration, delivering natural, youthful, and long-lasting results with precision."
        buttonText="Schedule Free Consultation"
        buttonLink="#"
      />

      <div className="flex w-full mt-[100px]">
        {/* Left Side Content */}
        <div className="flex items-center justify-center w-full md:w-1/2 px-[100px]">
          <div>
            {/* Tag */}
            <div className="mb-[40px] inline-block bg-white px-4 py-1">
              <p className="tag">Why Facial Aesthetics</p>
            </div>

            {/* Heading */}
            <h2>BENEFITS OF FACIAL AESTHETICS</h2>
            {/* Description */}
            <p className="body-2 mt-[10px]">
              Achieve a radiant, youthful look with tailored treatments that
              enhance facial contours, smooth skin, and restore volume.
            </p>

            {/* List */}
            <ul className="mt-[30px] space-y-[20px] mb-[40px]">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-2">
                  <img src="/tick.svg" alt="tick" />
                  <p className="body-2">{benefit}</p>
                </li>
              ))}
            </ul>

            {/* Button */}
            <Button
              buttonText="Schedule Free Consultation"
              onClick={() => console.log("Clicked!")}
            />
          </div>
        </div>

        {/* Right Side Image */}
        <div className=" w-full md:w-1/2">
          <img
            className="object-cover  w-full h-[920px] max-h-[920px]"
            src="/services/image-2.png"
            alt="Facial Aesthetics"
          />
        </div>
      </div>
    </>
  );
};

export default Services;
