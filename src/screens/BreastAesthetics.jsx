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

const BreastAesthetics = () => {
  return (
    <>
      <PageHero
        title="Breast Aesthetics"
        description="Enhance breast shape, size, and symmetry with advanced aesthetic procedures designed to restore confidence, balance, and a natural, youthful appearance."
      />

      <OfferSection
        imageSrc={Image1}
        tagText="What we offer"
        title="Enhance, Restore & Rejuvenate"
        description="Our expert breast aesthetic procedures, including augmentation, lifts, and reductions, offer natural-looking results tailored to your unique body goals and confidence needs."
        buttonText="Schedule Free Consultation"
        onButtonClick={() => console.log("Consultation Scheduled!")}
      />

      <TextWithImage
        badge="Why Breast Aesthetics"
        title="Benefits of Breast Aesthetics"
        descriptions={[
          "Achieve a balanced, youthful look with customized treatments designed to enhance symmetry, shape, and overall body confidence.",
        ]}
        buttonText="Schedule Free Consultation"
        buttonAction={() => console.log("Clicked!")}
        imageSrc="/services/image-2.png"
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

      <OurServices
        title="Comprehensive Services"
        description="Our advanced breast aesthetic procedures focus on enhancing shape, volume, and proportion. Whether you desire augmentation, a lift, or reduction, our expert techniques ensure personalized, natural-looking results with minimal downtime and maximum confidence."
        ourServicesData={[
          {
            rotate: 12,
            service: "Breast Augmentation (implant)",
            url: "https://placehold.co/341x511",
          },
          {
            rotate: -12,
            service: "Breast Lift (mastopexy)",
            url: "https://placehold.co/341x511",
          },
          {
            rotate: 12,
            service: "Breast Reduction",
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
              "Mild swelling and sensitivity, initial healing starts.",
          },
          {
            heading: "Week 2-3",
            // title: "",
            description: "Swelling reduces, early shape improvements visible.",
          },
          {
            heading: "Week 4-6",
            // title: "",
            description: "Noticeable firmness, improved contour, and symmetry.",
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

export default BreastAesthetics;
