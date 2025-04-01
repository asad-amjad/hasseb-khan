import React from "react";
// import { useNavigate } from "react-router-dom";

import PageHero from "../../components/hero-section/PageHero";
import ConsultationForm from "../../components/consultation-form/ConsultationForm";
import HorizontalStories from "../../components/horizontal-stories/HorizontalStories";
import ImageComparisonSlider from "../../components/image-comparison-slider/ImageComparisonSlider";
import { storiesData } from "../../../constants";
import IntroWithImage from "../../components/intro-with-image/IntroWithImage";
import ServiceDetails from "../../components/service-details/ServiceDetails";

// Assets

import bannerImage from "../../assets/dental/banner.png";
import introImage from "../../assets/dental/intro.png";

const DentalTherapy = () => {
  return (
    <>
      {/* Video Hero section */}
      <PageHero
        title="Relieve Pain and Enhance Oral Comfort"
        description="Our dental therapy services focus on relieving pain, preventing damage, and enhancing comfort. From masseter Botox for jaw relaxation to night guards for teeth protection, we offer effective solutions tailored to your needs."
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
        title="About Dental Therapy"
        descriptions={[
          "Dental therapy addresses functional and aesthetic concerns through targeted treatments aimed at pain relief, muscle relaxation, and dental protection. With advanced techniques like masseter Botox and customized night guards, we enhance oral health and improve quality of life.",
        ]}
        imageSrc={introImage}
      />

      <ServiceDetails
        title="Comprehensive Services"
        ourServicesData={[
          {
            service: "Masseter Botox",
            description:
              "A non-surgical procedure to relax the masseter muscle, reducing jaw pain, teeth grinding, and facial tension. It also helps in reshaping a square jawline for a more balanced facial appearance.",
          },
          {
            service: "Night Guard",
            description:
              "A custom-made dental appliance designed to protect teeth from grinding or clenching during sleep. Night guards prevent enamel wear, jaw pain, and other complications associated with bruxism.",
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

export default DentalTherapy;
