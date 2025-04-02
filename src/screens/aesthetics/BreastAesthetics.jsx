import React from "react";
import { useNavigate } from "react-router-dom";

import PageHero from "../../components/hero-section/PageHero";
import ScrollTimeline from "../../components/scroll-timeline/ScrollTimeline";
import ConsultationForm from "../../components/consultation-form/ConsultationForm";
import HorizontalStories from "../../components/horizontal-stories/HorizontalStories";
import ImageComparisonSlider from "../../components/image-comparison-slider/ImageComparisonSlider";

// Assets
// import bannerImage from "../../assets/dental/banner.png";
import introImage from "../../assets/breast-aesthetics/intro.png";
import { storiesData } from "../../../constants";
import IntroWithImage from "../../components/intro-with-image/IntroWithImage";
import ServiceDetails from "../../components/service-details/ServiceDetails";
import introImage6 from "../../assets/dental/intro6.png";

// import orthodonticsImage from "../../assets/dental/banner-orthodontics.png";
import orthodonticsImage from "../../assets/breast-aesthetics/banner.png";
import TextWithImage from "../../components/text-with-image/TextWithImage";
import OfferSection from "../../components/offer-section/OfferSection";

const BreastAesthetics = () => {
  return (
    <>
      {/* Video Hero section */}
      <PageHero
        title="Breast Aesthetics"
        description="Enhance breast shape, size, and symmetry with advanced aesthetic procedures designed to restore confidence, balance, and a natural, youthful appearance."
      />
      {/* <div className="md:pt-[100px]">
        <img
          className="object-cover w-full h-398px md:h-[860px] md:max-h-[860px]"
          src={orthodonticsImage}
          alt="image"
        />
      </div> */}

      <OfferSection
        imageSrc={orthodonticsImage}
        tagText="What we offer"
        title="Enhance, Restore & Rejuvenate"
        description="Our expert breast aesthetic procedures, including augmentation, lifts, and reductions, offer natural-looking results tailored to your unique body goals and confidence needs."
        buttonText="Schedule Free Consultation"
        onButtonClick={() => navigate("/schedule-free-consultation")}
      />

      <TextWithImage
        badge="Why Breast Aesthetics"
        title="Benefits of Breast Aesthetics"
        descriptions={[
          "Achieve a balanced, youthful look with customized treatments designed to enhance symmetry, shape, and overall body confidence.",
        ]}
        buttonText="Schedule Free Consultation"
        buttonAction={() => navigate("/schedule-free-consultation")}
        imageSrc={introImage}
        imageAlt="Facial Aesthetics"
        items={[
          "Enhanced Shape – Achieve a fuller, sculpted look.",
          "Improved Symmetry – Balance for a natural appearance.",
          "Boosted Confidence – Feel comfortable in your skin.",
          "Customizable Options – Augmentation, lift, or reduction.",
          "Long-Lasting Results – Sustainable aesthetic improvements.",
          "Minimal Downtime – Faster recovery, lasting beauty.",
        ]}
      />

      <ServiceDetails
        title="Comprehensive Services"
        ourServicesData={[
          {
            service: "Breast Augmentation (implant)",
            description:
              "Lorem Self-ligating braces designed to reduce friction and provide faster, more comfortable teeth alignment. They offer a cleaner, more discreet look compared to traditional braces while enhancing overall treatment efficiency.",
          },
          {
            service: "Breast Lift (mastopexy)",
            description:
              "Lorem A clear aligner system that gradually shifts teeth into the desired position without the need for metal brackets or wires. Invisalign offers comfort, convenience, and a virtually invisible solution for achieving a straighter smile.",
          },
          {
            service: "Breast Reduction",
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

export default BreastAesthetics;
