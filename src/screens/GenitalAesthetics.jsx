import React from "react";
// import Breadcrumb from "../components/Breadcrumbs/Breadcrumb";
import WhatWeOffer from "../components/what-we-offer/WhatWeOffer";
import Button from "../components/button/Button";
import TextAndDescription from "../components/text-and-description/TextAndDescription";
import OurServices from "../components/our-services/OurServices";
import ScrollingText from "../components/scrolling-text/ScrollingText";
import ScrollTimeline from "../components/scroll-timeline/ScrollTimeline";
import HorizontalStories from "../components/horizontal-stories/HorizontalStories";
import Partners from "../components/partners/Partners";
import ConsultationForm from "../components/consultation-form/ConsultationForm";

import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import TextWithImage from "../components/text-with-image/TextWithImage";
import VideoHero from "../components/hero-section/VideoHero";
import PageHero from "../components/hero-section/PageHero";
import Image1 from "../assets/about-us/image-1.jpeg";
import ImageComparisonSlider from "../components/image-comparison-slider/ImageComparisonSlider";
import OfferSection from "../components/offer-section/OfferSection";

const GenitalAesthetics = () => {
  return (
    <>
      {/* Video Hero section */}
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
        imageSrc="/services/image-2.png"
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
      {/* Parallax Images Section*/}
      {/* <div className="my-[80px] md:my-[250px]">
        <TextAndDescription
          title="Your Health Journey Starts Here"
          description="From aesthetic transformations to life-changing medical treatments, we offer specialized healthcare solutions designed for you. Our advanced technology, expert specialists, and personalized approach ensure exceptional results, making your health and comfort our top priority."
        />
        <div className="mt-[40px] md:mt-[60px]  space-y-[10px]">
          <ScrollingText direction="left" />
          <ScrollingText direction="right" />
        </div>
      </div> */}
      {/* Our Services */}
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
            // title: "Choose your treatment",
            description:
              "Mild swelling and sensitivity, initial healing begins.",
          },
          {
            heading: "Week 2-3",
            // title: "Get a Free Quote",
            description:
              "Swelling reduces, early shape improvements visible.",
          },
          {
            heading: "Week 4-6",
            // title: "Plan Your Stay",
            description:
              "Noticeable aesthetic and functional enhancement.",
          },
        ]}
      />
      {/* Partners */}
      {/* <Partners /> */}
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
      {/* <ScrollTimeline
        title="When Will I See Results?"
        timelineData={timelineData}
      /> */}
      {/* <WhatWeOffer
        badge="What we offer"
        title="REFINE, REJUVENATE & RESTORE"
        description="Our expert facial aesthetic treatments include contouring, skin tightening, and volume restoration, delivering natural, youthful, and long-lasting results with precision."
        buttonText="Schedule Free Consultation"
        buttonLink="#"
      />

      <ConsultationForm />

      <Breadcrumb
        title="FACIAL AESTHETICS"
        description="Enhance facial harmony, symmetry, and youthful appearance with advanced aesthetic procedures designed to refine features, restore volume, and improve skin texture."
      /> */}
    </>
  );
};

export default GenitalAesthetics;
