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

import introImage2 from "../../assets/dental/intro2.png";
import dentalImplantsImage from "../../assets/dental/banner-dental-implants.png";

// import beforeImage from "../../assets/before-after/15-Before.jpg";
// import afterImage from "../../assets/before-after/15-After.jpg";

const DentalImplants = () => {
  return (
    <>
      {/* Video Hero section */}
      <PageHero
        title="Restore Your Smile with Dental Implants"
        description="Dental implants offer a permanent, natural-looking solution for missing teeth. From single implants to full-mouth restoration, our advanced techniques provide comfort, durability, and aesthetic excellence. Achieve a confident smile that feels and functions like natural teeth."
      />
      <div className="md:pt-[100px]">
        <img
          className="object-cover w-full h-398px md:h-[860px] md:max-h-[860px]"
          src={dentalImplantsImage}
          alt="image"
        />
      </div>

      <IntroWithImage
        badge="Introduction"
        title="About Dental Implants"
        descriptions={[
          "Dental implants are a highly effective and durable solution for replacing missing teeth. They consist of titanium posts that are surgically placed into the jawbone, acting as artificial tooth roots. Once healed, they are topped with crowns or bridges, providing a natural appearance and functionality. Implants are known for their longevity, stability, and ability to preserve jawbone health.",
        ]}
        imageSrc={introImage2}
      />

      <ServiceDetails
        title="Comprehensive Services"
        ourServicesData={[
          {
            service: "Single Dental Implant",
            description:
              "A single dental implant is designed to replace one missing tooth, providing a seamless and durable solution that blends naturally with your existing teeth. Ideal for those looking to restore their smile and chewing function with minimal disruption.",
          },
          {
            service: "All-on-4 / All-on-6 Implants",
            description:
              "Revolutionary full-arch restoration techniques using four or six implants to support a complete set of teeth. These procedures offer enhanced stability, immediate function, and a beautiful, natural-looking smile without the need for individual implants for each tooth.",
          },
          {
            service: "Immediate Implants",
            description:
              "Achieve instant results with immediate implants, where implants are placed right after tooth extraction. This innovative approach reduces treatment time and allows for quicker healing and immediate aesthetic improvements.",
          },
        ]}
      />

      {/* <ImageComparisonSlider before={beforeImage} after={afterImage} /> */}

      <HorizontalStories storiesData={storiesData} />

      <ConsultationForm />
    </>
  );
};

export default DentalImplants;
