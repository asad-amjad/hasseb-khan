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

// Assets
import bannerImage from "../assets/breast-aesthetics/banner.png";
import intro from "../assets/breast-aesthetics/intro.png";
import { storiesData } from "../../constants";

import image1 from "../assets/breast-aesthetics/1.png";
import image2 from "../assets/breast-aesthetics/2.png";
import image3 from "../assets/breast-aesthetics/3.png";

const BreastAesthetics = () => {
  const navigate = useNavigate();
  return (
    <>
      <PageHero
        title="Breast Aesthetics"
        description="Enhance breast shape, size, and symmetry with advanced aesthetic procedures designed to restore confidence, balance, and a natural, youthful appearance."
      />

      <OfferSection
        imageSrc={bannerImage}
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
        imageSrc={intro}
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
            imageSrc: image1,
            url: "/breast-aesthetics/breast-augmentation",
          },
          {
            rotate: -12,
            service: "Breast Lift (mastopexy)",
            imageSrc: image2,
            url: "/breast-aesthetics/breast-lift",
          },
          {
            rotate: 12,
            service: "Breast Reduction",
            imageSrc: image3,
            url: "/breast-aesthetics/breast-reduction",
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
      <HorizontalStories storiesData={storiesData} />

      <ConsultationForm />
    </>
  );
};

export default BreastAesthetics;
