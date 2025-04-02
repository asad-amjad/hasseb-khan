import React from "react";
import { useNavigate } from "react-router-dom";

import PageHero from "../../../components/hero-section/PageHero";
import ScrollTimeline from "../../../components/scroll-timeline/ScrollTimeline";
import ConsultationForm from "../../../components/consultation-form/ConsultationForm";
import HorizontalStories from "../../../components/horizontal-stories/HorizontalStories";
import ImageComparisonSlider from "../../../components/image-comparison-slider/ImageComparisonSlider";

// Assets
// import bannerImage from "../../assets/dental/banner.png";
// import introImage from "../../assets/dental/intro.png";
import { storiesData } from "../../../../constants";
import IntroWithImage from "../../../components/intro-with-image/IntroWithImage";
import ServiceDetails from "../../../components/service-details/ServiceDetails";
import introImage6 from "../../../assets/dental/intro6.png";

import orthodonticsImage from "../../../assets/dental/banner-orthodontics.png";

const Abdominoplasty = () => {
  return (
    <>
      {/* Video Hero section */}
      <PageHero
        title="abdominoplasty"
        description="Our orthodontic treatments offer advanced solutions for teeth alignment and bite correction. From traditional braces to modern Invisalign, we provide tailored options to enhance your smile’s aesthetics and functionality."
      />
      <div className="md:pt-[100px]">
        <img
          className="object-cover w-full h-398px md:h-[860px] md:max-h-[860px]"
          src={orthodonticsImage}
          alt="image"
        />
      </div>

      <IntroWithImage
        badge="Introduction"
        title="About Orthodontics"
        descriptions={[
          "Orthodontics focuses on correcting misaligned teeth and jaw structures to improve oral health, aesthetics, and functionality. Through innovative treatments like Damon Smile Braces and Invisalign, we ensure effective and comfortable solutions for achieving a beautifully aligned smile.",
        ]}
        imageSrc={introImage6}
      />

      <ServiceDetails
        title="Comprehensive Services"
        ourServicesData={[
          {
            service: "Abdominoplasty",
            description:
              "Lorem Self-ligating braces designed to reduce friction and provide faster, more comfortable teeth alignment. They offer a cleaner, more discreet look compared to traditional braces while enhancing overall treatment efficiency.",
          },
          {
            service: "360 Abdominoplasty",
            description:
              "Lorem A clear aligner system that gradually shifts teeth into the desired position without the need for metal brackets or wires. Invisalign offers comfort, convenience, and a virtually invisible solution for achieving a straighter smile.",
          },
          {
            service: "Mini Abdominoplasty",
            description:
              "Lorem A clear aligner system that gradually shifts teeth into the desired position without the need for metal brackets or wires. Invisalign offers comfort, convenience, and a virtually invisible solution for achieving a straighter smile.",
          },
        ]}
      />

      <ImageComparisonSlider
        before="https://placehold.co/1312x642?text=Hello+World"
        after="https://placehold.co/1312x642?text=Hiiiii+World"
      />

      <HorizontalStories storiesData={storiesData} />

      <ConsultationForm />
    </>
  );
};

export default Abdominoplasty;
