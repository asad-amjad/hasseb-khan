import React from "react";

import PageHero from "../../components/hero-section/PageHero";
import ServiceDetails from "../../components/service-details/ServiceDetails";
import IntroWithImage from "../../components/intro-with-image/IntroWithImage";
import ConsultationForm from "../../components/consultation-form/ConsultationForm";
import HorizontalStories from "../../components/horizontal-stories/HorizontalStories";
import ImageComparisonSlider from "../../components/image-comparison-slider/ImageComparisonSlider";
import { storiesData } from "../../../constants";

// Assets
// import bannerImage from "../../assets/body-aesthetics/bbl.jpg";
// import introImage from "../../assets/body-aesthetics/bbl-1.jpg";

const Bbl = () => {
  return (
    <>
      {/* Video Hero section */}
      <PageHero
        title="Bbl"
        description="Our orthodontic treatments offer advanced solutions for teeth alignment and bite correction. From traditional braces to modern Invisalign, we provide tailored options to enhance your smile’s aesthetics and functionality."
      />
      {/* <div className="md:pt-[100px]">
        <img
          className="object-cover w-full h-398px md:h-[860px] md:max-h-[860px]"
          src={bannerImage}
          alt="image"
        />
      </div> */}

      {/* <IntroWithImage
        badge="Introduction"
        title="About Orthodontics"
        descriptions={[
          "Orthodontics focuses on correcting misaligned teeth and jaw structures to improve oral health, aesthetics, and functionality. Through innovative treatments like Damon Smile Braces and Invisalign, we ensure effective and comfortable solutions for achieving a beautifully aligned smile.",
        ]}
        imageSrc={introImage}
      /> */}

      <ServiceDetails
        title="Comprehensive Services"
        ourServicesData={[
          {
            service: "Pending",
            description:
              "Lorem Self-ligating braces designed to reduce friction and provide faster, more comfortable teeth alignment. They offer a cleaner, more discreet look compared to traditional braces while enhancing overall treatment efficiency.",
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

export default Bbl;
