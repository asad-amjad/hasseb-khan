import React from "react";

import PageHero from "../components/hero-section/PageHero";
import OurServices from "../components/our-services/OurServices";
import OfferSection from "../components/offer-section/OfferSection";
import TextWithImage from "../components/text-with-image/TextWithImage";
import ScrollTimeline from "../components/scroll-timeline/ScrollTimeline";
import ConsultationForm from "../components/consultation-form/ConsultationForm";
import HorizontalStories from "../components/horizontal-stories/HorizontalStories";
import ImageComparisonSlider from "../components/image-comparison-slider/ImageComparisonSlider";
import Image1 from "../assets/about-us/image-1.jpeg";

const GenitalAesthetics = () => {
  return (
    <>
      <PageHero
        title="Genital Aesthetics"
        description="Enhance comfort, confidence, and function with advanced genital aesthetic procedures designed to improve appearance, symmetry, and overall well-being."
      />

      <OfferSection
        imageSrc={Image1}
        tagText="What we offer"
        title="Personalized Care for Confidence & Comfort"
        description="Our expert procedures focus on aesthetic enhancement and functional improvements, ensuring natural-looking results with minimal downtime and maximum satisfaction."
        buttonText="Schedule Free Consultation"
        onButtonClick={() => console.log("Consultation Scheduled!")}
      />

      <TextWithImage
        badge="Why Genital Aesthetics"
        title="Benefits of Genital Aesthetics"
        descriptions={[
          "Enhance aesthetics and function with tailored treatments that improve confidence, comfort, and overall intimate well-being.",
        ]}
        buttonText="Schedule Free Consultation"
        buttonAction={() => console.log("Clicked!")}
        imageSrc={Image1}
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

      <OurServices
        title="Comprehensive Services"
        description="We offer a range of specialized genital aesthetic procedures designed to restore confidence and improve overall intimate wellness. Our treatments focus on both functional and aesthetic enhancements, ensuring personalized, effective results with advanced techniques."
        ourServicesData={[
          {
            rotate: 12,
            service: "Labioplasty",
            url: "https://placehold.co/341x511",
          },
          {
            rotate: -12,
            service: "Labium fat grafting",
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

      <ImageComparisonSlider
        before="https://placehold.co/1312x642?text=Hello+World"
        after="https://placehold.co/1312x642?text=Hiiiii+World"
      />
      <HorizontalStories
        storiesData={[
          {
            name: "Frankie",
            role: "New Parents",
            des: "Lorem ipsum dolor sit amet consectetur. Neque curabitur tellus et malesuada erat.",
            image: "https://placehold.co/383x330",
            type: "story",
          },
          {
            image: "https://placehold.co/383x330",
            type: "image",
          },
          {
            name: "John Doe",
            role: "New Parents",
            des: "Lorem ipsum dolor sit amet consectetur. Neque curabitur tellus et malesuada erat.",
            image: "https://placehold.co/383x330",
            type: "story",
          },
          {
            image: "https://placehold.co/383x330",
            type: "image",
          },
        ]}
      />
      <ConsultationForm />
    </>
  );
};

export default GenitalAesthetics;
