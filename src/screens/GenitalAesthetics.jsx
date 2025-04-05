import React from "react";
import { useNavigate } from "react-router-dom";

import PageHero from "../components/hero-section/PageHero";
import OurServices from "../components/our-services/OurServices";
import OfferSection from "../components/offer-section/OfferSection";
import TextWithImage from "../components/text-with-image/TextWithImage";
import ScrollTimeline from "../components/scroll-timeline/ScrollTimeline";
import ConsultationForm from "../components/consultation-form/ConsultationForm";
import HorizontalStories from "../components/horizontal-stories/HorizontalStories";
import ImageComparisonSlider from "../components/image-comparison-slider/ImageComparisonSlider";
import { storiesData } from "../../constants";

// Assets
// import bannerImage from "../../assets/body-aesthetics/banner.png";
import bannerImage from "../assets/genital-aesthetic/banner.png";
import intro from "../assets/genital-aesthetic/intro.png";

// import image1 from "../../assets/body-aesthetics/1.png";
// import image2 from "../../assets/body-aesthetics/2.png";
// import image3 from "../../assets/body-aesthetics/3.png";
// import image4 from "../../assets/body-aesthetics/4.png";
// import image5 from "../../assets/body-aesthetics/5.png";
// import image6 from "../../assets/body-aesthetics/6.png";
// import image7 from "../../assets/body-aesthetics/7.png";
// import image8 from "../../assets/body-aesthetics/8.png";
// import image9 from "../../assets/body-aesthetics/9.png";
import ServiceDetails from "../components/service-details/ServiceDetails";

import beforeImage from "../assets/before-after/4-before.jpg";
import afterImage from "../assets/before-after/4-after.jpg";

const GenitalAesthetics = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* Video Hero section */}
      <PageHero
        title="Genital Aesthetics"
        description="Enhance your confidence and well-being with our personalized genital aesthetic treatments. Tailored to address comfort, symmetry, and functionality, our procedures ensure natural, harmonious results with care and discretion."
      />

      <OfferSection
        imageSrc={bannerImage}
        tagText="What we offer"
        title="Personalized Care for Confidence & Comfort"
        description="Our expert procedures focus on aesthetic enhancement and functional improvements, ensuring natural-looking results with minimal downtime and maximum satisfaction."
        buttonText="Schedule Free Consultation"
        onButtonClick={() => navigate("/schedule-free-consultation")}
      />

      <TextWithImage
        badge="Why Genital Aesthetics"
        title="Benefits of Genital Aesthetics"
        descriptions={[
          "Enhance aesthetics and function with tailored treatments that improve confidence, comfort, and overall intimate well-being.",
        ]}
        buttonText="Schedule Free Consultation"
        buttonAction={() => navigate("/schedule-free-consultation")}
        imageSrc={intro}
        imageAlt="Facial Aesthetics"
        items={[
          "Improved Appearance – Enhances symmetry and aesthetics.",
          "Boosted Confidence – Feel comfortable in your skin.",
          "Functional Enhancement – Improves comfort and sensation.",
          "Minimally Invasive – Quick procedures, faster recovery.",
          "Custom Treatment Plans – Tailored to individual needs.",
          "Long-Lasting Results – Sustainable improvements over time.",
        ]}
      />

      <ServiceDetails
        title="Comprehensive Services"
        ourServicesData={[
          {
            service: "Labioplasty",
            description:
              "Lorem Self-ligating braces designed to reduce friction and provide faster, more comfortable teeth alignment. They offer a cleaner, more discreet look compared to traditional braces while enhancing overall treatment efficiency.",
          },
          {
            service: "Labium Fat Grafting",
            description:
              "Lorem A clear aligner system that gradually shifts teeth into the desired position without the need for metal brackets or wires. Invisalign offers comfort, convenience, and a virtually invisible solution for achieving a straighter smile.",
          },
        ]}
      />

      <ScrollTimeline
        title="When will I see results?"
        timelineData={[
          {
            heading: "Week 1",
            // title: "",
            description:
              "Mild swelling and sensitivity, initial healing begins.",
          },
          {
            heading: "Week 2-3",
            // title: "",
            description: "Swelling reduces, early shape improvements visible.",
          },
          {
            heading: "Week 4-6",
            // title: "",
            description: "Noticeable aesthetic and functional enhancement.",
          },
        ]}
      />

      <ImageComparisonSlider before={beforeImage} after={afterImage} />

      <HorizontalStories storiesData={storiesData} />
      <ConsultationForm />
    </>
  );
};

export default GenitalAesthetics;
