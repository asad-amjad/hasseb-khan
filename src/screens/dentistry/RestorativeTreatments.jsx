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

const RestorativeTreatments = () => {
  return (
    <>
      {/* Video Hero section */}
      <PageHero
        title="Restore Health and Function to Your Teeth"
        description="Our restorative treatments address damaged or decayed teeth, ensuring optimal health, appearance, and functionality. From root canals to composite fillings, we provide effective solutions for long-lasting dental health."
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
        title="About Restorative Treatments"
        descriptions={[
          "Restorative treatments are essential for repairing and saving damaged teeth, restoring their natural function and appearance. Whether through root canals, fillings, or advanced composite techniques, our procedures are designed to preserve oral health, prevent further damage, and enhance aesthetics.",
        ]}
        imageSrc={introImage}
      />

      <ServiceDetails
        title="Comprehensive Services"
        ourServicesData={[
          {
            service: "Root Canal Treatment",
            description:
              "A procedure to save infected or damaged teeth by removing the infected pulp, cleaning, and sealing the root canal. This treatment relieves pain, prevents further damage, and preserves your natural tooth.",
          },
          {
            service: "Retreatment",
            description:
              "A follow-up procedure for previously treated root canals that require additional care. Retreatment ensures thorough cleaning and sealing, addressing complications and promoting long-term success.",
          },
          {
            service: "Fillings",
            description:
              "Traditional fillings used to repair cavities and restore tooth structure. They prevent further decay by sealing and protecting damaged areas, ensuring durability and functionality.",
          },
          {
            service: "Composite Fillings",
            description:
              "Tooth-colored fillings that provide a natural-looking restoration for cavities or minor damage. Made from resin materials, they blend seamlessly with your natural teeth while offering strength and aesthetics.",
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

export default RestorativeTreatments;
