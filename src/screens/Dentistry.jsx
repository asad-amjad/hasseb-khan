import React from "react";

import PageHero from "../components/hero-section/PageHero";
import OurServices from "../components/our-services/OurServices";
import OfferSection from "../components/offer-section/OfferSection";
import TextWithImage from "../components/text-with-image/TextWithImage";
import ScrollTimeline from "../components/scroll-timeline/ScrollTimeline";
import ConsultationForm from "../components/consultation-form/ConsultationForm";
import HorizontalStories from "../components/horizontal-stories/HorizontalStories";
import ImageComparisonSlider from "../components/image-comparison-slider/ImageComparisonSlider";

// Assets
import bannerImage from "../assets/dental/banner.png";
import introImage from "../assets/dental/intro.png";
import { storiesData } from "../../constants";

const Dentistry = () => {
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
        onButtonClick={() => console.log("Consultation Scheduled!")}
      />

      <TextWithImage
        badge="Why Dentistry"
        title="Benefits of Dentistry"
        descriptions={[
          "Transform your smile with expert treatments that enhance tooth appearance, boost confidence, and promote long-term oral health.",
        ]}
        buttonText="Schedule Free Consultation"
        buttonAction={() => console.log("Clicked!")}
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
            service: "aesthetic dentistry",
            url: "https://placehold.co/341x511",
          },
          {
            rotate: -12,
            service: "dental implants",
            url: "https://placehold.co/341x511",
          },
          {
            rotate: 12,
            service: "surgical prosedures",
            url: "https://placehold.co/341x511",
          },
          {
            rotate: -12,
            service: "restorative treatments",
            url: "https://placehold.co/341x511",
          },
          {
            rotate: 12,
            service: "periodontics",
            url: "https://placehold.co/341x511",
          },
          {
            rotate: -12,
            service: "Orthodontics",
            url: "https://placehold.co/341x511",
          },
          {
            rotate: 12,
            service: "Dental therapy",
            url: "https://placehold.co/341x511",
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
