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
import bannerImage from "../assets/dental/banner.png";
import introImage from "../assets/dental/intro.png";

import Image1 from "../assets/dental/1.png";
import Image2 from "../assets/dental/2.png";
import Image3 from "../assets/dental/3.png";
import Image4 from "../assets/dental/4.png";
import Image5 from "../assets/dental/5.png";
import Image6 from "../assets/dental/6.png";
import Image7 from "../assets/dental/7.png";

const Dentistry = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* Video Hero section */}
      <PageHero
        title="Dentistry"
        description="Enhance your smile with advanced aesthetic dentistry, designed to improve tooth shape, color, and alignment for a confident, radiant appearance."
      />

      <OfferSection
        imageSrc={bannerImage}
        tagText="What we offer"
        title="Perfect Your Smile with Precision"
        description="Our aesthetic dentistry services provide customized treatments, including teeth whitening, veneers, and smile makeovers, ensuring natural-looking, long-lasting results."
        buttonText="Schedule Free Consultation"
        onButtonClick={() => navigate("/schedule-free-consultation")}
      />

      <TextWithImage
        badge="Why Dentistry"
        title="Benefits of Dentistry"
        descriptions={[
          "Transform your smile with expert treatments that enhance tooth appearance, boost confidence, and promote long-term oral health.",
        ]}
        buttonText="Schedule Free Consultation"
        buttonAction={() => navigate("/schedule-free-consultation")}
        imageSrc={introImage}
        imageAlt="Facial Aesthetics"
        items={[
          "Whiter Teeth – Professional whitening for a brighter smile.",
          "Improved Alignment – Straighter, well-proportioned teeth.",
          "Enhanced Tooth Shape – Customized veneers and bonding.",
          "Boosted Confidence – Smile with assurance.",
          "Minimally Invasive – Advanced, gentle procedures.",
          "Long-Lasting Results – Durable, natural aesthetics.",
        ]}
      />

      <OurServices
        title="Comprehensive Services"
        description="Our aesthetic dentistry solutions focus on enhancing smile aesthetics through advanced procedures like teeth whitening, veneers, bonding, and alignment correction. With cutting-edge techniques, we create beautifully natural, confident smiles that last."
        ourServicesData={[
          {
            rotate: 12,
            service: "Aesthetic dentistry",
            imageSrc: Image1,
            url: "/dentistry/aesthetic-dentistry",
          },
          {
            rotate: -12,
            service: "Dental implants",
            imageSrc: Image2,
            url: "/dentistry/dental-implants",
          },
          {
            rotate: 12,
            service: "Surgical procedures",
            imageSrc: Image3,
            url: "/dentistry/surgical-procedures",
          },
          {
            rotate: -12,
            service: "Restorative treatments",
            imageSrc: Image4,
            url: "/dentistry/restorative-treatments",
          },
          {
            rotate: 12,
            service: "Periodontics",
            imageSrc: Image5,
            url: "/dentistry/periodontics",
          },
          {
            rotate: -12,
            service: "Orthodontics",
            imageSrc: Image6,
            url: "/dentistry/orthodontics",
          },
          {
            rotate: 12,
            service: "Dental therapy",
            imageSrc: Image7,
            url: "/dentistry/dental-therapy",
          },
        ]}
      />

      <ScrollTimeline
        title="When will I see results?"
        timelineData={[
          {
            heading: "Week 1",
            // title: "",
            description: "Initial improvements in tooth color and shape.",
          },
          {
            heading: "Week 2-3",
            // title: "",
            description:
              "Adjustments settle, noticeable enhancements in symmetry.",
          },
          {
            heading: "Week 4-6",
            // title: "",
            description: "Improved smile aesthetics, natural-looking results.",
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

export default Dentistry;
