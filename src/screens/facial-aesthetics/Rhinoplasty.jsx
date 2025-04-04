import React from "react";

import PageHero from "../../components/hero-section/PageHero";
import ConsultationForm from "../../components/consultation-form/ConsultationForm";
import HorizontalStories from "../../components/horizontal-stories/HorizontalStories";
import ImageComparisonSlider from "../../components/image-comparison-slider/ImageComparisonSlider";

// Assets

import { storiesData } from "../../../constants";
import IntroWithImage from "../../components/intro-with-image/IntroWithImage";
import ServiceDetails from "../../components/service-details/ServiceDetails";
import introImage6 from "../../assets/dental/intro6.png";

import orthodonticsImage from "../../assets/dental/banner-orthodontics.png";
import bannerImage from "../../assets/facial-aesthetics/rhinoplasty.jpg";
import introImage from "../../assets/facial-aesthetics/rhinoplasty-1.jpg";
import beforeImage from "../../assets/before-after/1-before.jpg";
import afterImage from "../../assets/before-after/1-after.jpg";

const Rhinoplasty = () => {
  return (
    <>
      {/* Video Hero section */}
      <PageHero
        title="Rhinoplasty"
        description="Our orthodontic treatments offer advanced solutions for teeth alignment and bite correction. From traditional braces to modern Invisalign, we provide tailored options to enhance your smile’s aesthetics and functionality."
      />
      <div className="md:pt-[100px]">
        <img
          className="object-cover w-full h-398px md:h-[860px] md:max-h-[860px]"
          src={bannerImage}
          alt="image"
        />
      </div>

      <IntroWithImage
        badge="Introduction"
        title="About Rhinoplasty"
        descriptions={[
          "Rhinoplasty focuses on correcting misaligned teeth and jaw structures to improve oral health, aesthetics, and functionality. Through innovative treatments like Damon Smile Braces and Invisalign, we ensure effective and comfortable solutions for achieving a beautifully aligned smile.",
        ]}
        imageSrc={introImage}
      />

      <ServiceDetails
        title="Comprehensive Services"
        ourServicesData={[
          {
            service: "Rhinoplasty",
            description:
              "Lorem A clear aligner system that gradually shifts teeth into the desired position without the need for metal brackets or wires. Invisalign offers comfort, convenience, and a virtually invisible solution for achieving a straighter smile.",
          },
        ]}
      />

      <ImageComparisonSlider before={beforeImage} after={afterImage} />

      <HorizontalStories storiesData={storiesData} />

      <ConsultationForm />
    </>
  );
};

export default Rhinoplasty;
