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
import bannerImage from "../assets/facial-aesthetics/banner.png";
import intro from "../assets/facial-aesthetics/intro.png";
import { storiesData } from "../../constants";

import image1 from "../assets/facial-aesthetics/1.png";
import image2 from "../assets/facial-aesthetics/2.png";
import image3 from "../assets/facial-aesthetics/3.png";
import image4 from "../assets/facial-aesthetics/4.png";
import image5 from "../assets/facial-aesthetics/5.png";
import image6 from "../assets/facial-aesthetics/6.png";
import image7 from "../assets/facial-aesthetics/7.png";
import image8 from "../assets/facial-aesthetics/8.png";
import image9 from "../assets/facial-aesthetics/9.png";
import image10 from "../assets/facial-aesthetics/10.png";
import image11 from "../assets/facial-aesthetics/11.png";
import image12 from "../assets/facial-aesthetics/12.png";

const FacialAesthetics = () => {
  const navigate = useNavigate();
  return (
    <>
      <PageHero
        title="Facial Aesthetics"
        description="Enhance facial harmony, symmetry, and youthful appearance with advanced aesthetic procedures designed to refine features, restore volume, and improve skin texture."
      />

      <OfferSection
        imageSrc={bannerImage}
        tagText="What we offer"
        title="Refine, Rejuvenate & Restore"
        description="Our expert facial aesthetic treatments include contouring, skin tightening, and volume restoration, delivering natural, youthful, and long-lasting results with precision."
        buttonText="Schedule Free Consultation"
        onButtonClick={() => navigate("/schedule-free-consultation")}
      />

      <TextWithImage
        badge="Why Facial Aesthetics"
        title="Benefits of Facial Aesthetics"
        descriptions={[
          "Achieve a radiant, youthful look with tailored treatments that enhance facial contours, smooth skin, and restore volume.",
        ]}
        buttonText="Schedule Free Consultation"
        buttonAction={() => navigate("/schedule-free-consultation")}
        imageSrc={intro}
        imageAlt="Facial Aesthetics"
        items={[
          "Improved Facial Symmetry – Balanced and natural-looking contours.",
          "Youthful Appearance – Reduce fine lines and wrinkles.",
          "Enhanced Skin Texture – Smoother, firmer skin.",
          "Volume Restoration – Replenish lost facial volume.",
          "Non-Invasive Options – Quick recovery with minimal downtime.",
          "Long-Lasting Results – Sustainable improvements for a fresh look.",
        ]}
      />

      <OurServices
        title="Comprehensive Services"
        description="We provide cutting-edge facial aesthetic treatments designed to enhance natural beauty and restore youthful features. From contouring and skin tightening to volume restoration, our expert techniques ensure personalized, effective, and lasting results."
        ourServicesData={[
          {
            rotate: 12,
            service: "Endoscopic Brow Lift/Cat Eye",
            imageSrc: image1,
            url: "/facial-aesthetics/endoscopic-brow-lift-cat-eye",
          },
          {
            rotate: -12,
            service: "Mid Face Lift",
            imageSrc: image2,
            url: "/facial-aesthetics/mid-face-lift",
          },
          {
            rotate: 12,
            service: "Neck Lift",
            imageSrc: image3,
            url: "/facial-aesthetics/neck-lift",
          },
          {
            rotate: -12,
            service: "Full Face Lift",
            imageSrc: image4,
            url: "/facial-aesthetics/full-face-lift",
          },
          {
            rotate: 12,
            service: "Upper Blepharoplasty",
            imageSrc: image5,
            url: "/facial-aesthetics/upper-blepharoplasty",
          },
          {
            rotate: -12,
            service: "Lower Blepharoplasty",
            imageSrc: image6,
            url: "/facial-aesthetics/lower-blepharoplasty",
          },
          {
            rotate: 12,
            service: "Rhinoplasty",
            imageSrc: image7,
            url: "/facial-aesthetics/rhinoplasty",
          },
          {
            rotate: -12,
            service: "Chin Implant",
            imageSrc: image8,
            url: "/facial-aesthetics/chin-implant",
          },
          {
            rotate: 12,
            service: "Facial Fat Grafting",
            imageSrc: image9,
            url: "/facial-aesthetics/facial-fat-grafting",
          },
          {
            rotate: -12,
            service: "Buccal Fat Removal",
            imageSrc: image10,
            url: "/facial-aesthetics/buccal-fat-removal",
          },
          {
            rotate: 12,
            service: "Double Chin Liposuction",
            imageSrc: image11,
            url: "/facial-aesthetics/double-chin-liposuction",
          },
          {
            rotate: -12,
            service: "Lip Lift",
            imageSrc: image12,
            url: "/facial-aesthetics/lip-lift",
          },
        ]}
      />

      <ScrollTimeline
        title="When will I see results?"
        timelineData={[
          {
            heading: "Week 1",
            // title: "",
            description: "Mild swelling or redness, initial healing begins.",
          },
          {
            heading: "Week 2-3",
            // title: "",
            description: "Skin appears firmer, subtle contour improvements.",
          },
          {
            heading: "Week 4-6",
            // title: "",
            description:
              "Noticeable enhancement in facial balance and smoothness.",
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

export default FacialAesthetics;
