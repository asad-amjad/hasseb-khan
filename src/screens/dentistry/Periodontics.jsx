import React from "react";
import { useNavigate } from "react-router-dom";

import PageHero from "../../components/hero-section/PageHero";
import ScrollTimeline from "../../components/scroll-timeline/ScrollTimeline";
import ConsultationForm from "../../components/consultation-form/ConsultationForm";
import HorizontalStories from "../../components/horizontal-stories/HorizontalStories";
import ImageComparisonSlider from "../../components/image-comparison-slider/ImageComparisonSlider";

// Assets
import bannerImage from "../../assets/dental/banner.png";
import introImage from "../../assets/dental/intro.png";
import { storiesData } from "../../../constants";
import IntroWithImage from "../../components/intro-with-image/IntroWithImage";
import ServiceDetails from "../../components/service-details/ServiceDetails";
import introImage5 from "../../assets/dental/intro5.png";

import periodonticsImage from "../../assets/dental/banner-periodontics.png";
import beforeImage from "../../assets/before-after/15-Before.jpg";
import afterImage from "../../assets/before-after/15-After.jpg";

const Periodontics = () => {
  return (
    <>
      {/* Video Hero section */}
      <PageHero
        title="Revitalize Your Gum Health and Smile"
        description="Our periodontics services ensure optimal gum health, enhancing both aesthetics and functionality. From deep cleaning to surgical procedures, we provide comprehensive care to treat gum-related issues and improve your smile."
      />
      <div className="md:pt-[100px]">
        <img
          className="object-cover w-full h-398px md:h-[860px] md:max-h-[860px]"
          src={periodonticsImage}
          alt="image"
        />
      </div>

      <IntroWithImage
        badge="Introduction"
        title="About Periodontics"
        descriptions={[
          "Periodontics focuses on preventing, diagnosing, and treating gum-related issues to ensure healthy gums and a strong foundation for your teeth. With treatments ranging from deep cleaning to surgical solutions, we aim to restore gum health, enhance aesthetics, and prevent future complications.",
        ]}
        imageSrc={introImage5}
      />

      <ServiceDetails
        title="Comprehensive Services"
        ourServicesData={[
          {
            service: "Cleaning and Deep Cleaning",
            description:
              "Regular and deep cleaning procedures designed to remove plaque, tartar, and bacteria from teeth and gums. Deep cleaning targets areas below the gumline to prevent and treat gum disease.",
          },
          {
            service: "Gingivectomy",
            description:
              "A surgical procedure to remove excess or diseased gum tissue, improving aesthetics and promoting healthier gum structure. Often used to treat periodontal disease or enhance the appearance of the smile.",
          },
          {
            service: "Gummy Smile Treatment",
            description:
              "Specialized procedures aimed at reshaping and contouring excess gum tissue to create a balanced, attractive smile. This treatment enhances both aesthetics and oral health.",
          },
          {
            service: "Flap Operation",
            description:
              "A surgical technique used to access and clean deep pockets of infection, followed by reshaping and securing gum tissue. Effective for treating advanced periodontal disease and promoting healing.",
          },
        ]}
      />

      <ImageComparisonSlider before={beforeImage} after={afterImage} />

      <HorizontalStories storiesData={storiesData} />

      <ConsultationForm />
    </>
  );
};

export default Periodontics;
