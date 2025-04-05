import React from "react";

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
import introImage7 from "../../assets/dental/intro7.png";

// import dentalImplantsImage from "../assets/dental/banner-dental-implants.png";
import dentalTherapyImage from "../../assets/dental/banner-dental-therapy.png";
// import orthodonticsImage from "../assets/dental/banner-orthodontics.png";
// import periodonticsImage from "../assets/dental/banner-periodontics.png";
// import restorativeTreatmentsImage from "../assets/dental/banner-restorative-treatments.png";
// import surgicalProceduresImage from "../assets/dental/banner-surgical-procedures.png";

// import beforeImage from "../../assets/before-after/15-Before.jpg";
// import afterImage from "../../assets/before-after/15-After.jpg";
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
          src={dentalTherapyImage}
          alt="image"
        />
      </div>

      <IntroWithImage
        badge="Introduction"
        title="About Dental Therapy"
        descriptions={[
          "Dental therapy addresses functional and aesthetic concerns through targeted treatments aimed at pain relief, muscle relaxation, and dental protection. With advanced techniques like masseter Botox and customized night guards, we enhance oral health and improve quality of life.",
        ]}
        imageSrc={introImage7}
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

      {/* <ImageComparisonSlider before={beforeImage} after={afterImage} /> */}

      <HorizontalStories storiesData={storiesData} />

      <ConsultationForm />
    </>
  );
};

export default DentalTherapy;
