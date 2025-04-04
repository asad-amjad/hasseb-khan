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

import introImage3 from "../../assets/dental/intro3.png";
import surgicalProceduresImage from "../../assets/dental/banner-surgical-procedures.png";
import beforeImage from "../../assets/before-after/12-Before.jpg";
import afterImage from "../../assets/before-after/12-After.jpg";

const SurgicalProcedures = () => {
  return (
    <>
      {/* Video Hero section */}
      <PageHero
        title="Surgical Solutions for Dental Restoration"
        description="Our surgical procedures support successful dental implant treatments and jawbone health. From sinus lifting to bone grafting, we offer tailored solutions to ensure optimal results and long-term stability for your dental implants."
      />
      <div className="md:pt-[100px]">
        <img
          className="object-cover w-full h-398px md:h-[860px] md:max-h-[860px]"
          src={surgicalProceduresImage}
          alt="image"
        />
      </div>

      <IntroWithImage
        badge="Introduction"
        title="About Surgical Procedures"
        descriptions={[
          "Surgical procedures are essential for preparing the jawbone to receive dental implants, especially when bone quality or quantity is insufficient. Techniques like sinus lifting, bone augmentation, split osteotomy, and bone grafting are designed to enhance bone structure, promote healing, and ensure implant stability. Our experts utilize state-of-the-art methods for precision and comfort.",
        ]}
        imageSrc={introImage3}
      />

      <ServiceDetails
        title="Comprehensive Services"
        ourServicesData={[
          {
            service: "Sinus Lifting",
            description:
              "A procedure aimed at increasing bone height in the upper jaw by lifting the sinus membrane and placing bone graft material. This technique provides a solid foundation for successful implant placement in the posterior maxilla.",
          },
          {
            service: "Bone Augmentation",
            description:
              "A method to rebuild and strengthen bone in areas with insufficient volume. This procedure ensures the jawbone is robust enough to support dental implants, enhancing overall stability and longevity.",
          },
          {
            service: "Split Osteotomy",
            description:
              "A specialized technique where the jawbone is divided and expanded to increase width, allowing for proper implant placement. Ideal for patients with narrow jawbones, providing enhanced stability and support.",
          },
          {
            service: "Bone Grafting",
            description:
              "A regenerative procedure that uses natural or synthetic materials to promote bone growth and strengthen areas with bone loss. Bone grafting ensures a durable, healthy foundation for implants and overall oral health.",
          },
        ]}
      />

      <ImageComparisonSlider before={beforeImage} after={afterImage} />

      <HorizontalStories storiesData={storiesData} />

      <ConsultationForm />
    </>
  );
};

export default SurgicalProcedures;
