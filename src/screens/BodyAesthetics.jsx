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
import bannerImage from "../assets/body-aesthetics/banner.png";
import intro from "../assets/body-aesthetics/intro.png";

import bodyLiftImage from "../assets/body-aesthetics/Body Lift-1.jpg";
import abdominoplastyImage from "../assets/body-aesthetics/abdominoplasty-1.jpg";
import laserLiposuctionImage from "../assets/body-aesthetics/Laser Liposuction-1.jpg";
import gynecomastiaImage from "../assets/body-aesthetics/Gynecomastia-1.jpg";
import bblImage from "../assets/body-aesthetics/Bbl-image-1.jpg";

import beforeImage from "../assets/before-after/3-before.jpg";
import afterImage from "../assets/before-after/3-after.jpg";

const BodyAesthetics = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* Video Hero section */}
      <PageHero
        title="Body Aesthetics"
        description="Experience cutting-edge body aesthetic treatments that shape your body and boost confidence. Our expert team uses the latest techniques to tighten skin, define contours, and target stubborn fat for natural, lasting results."
      />

      <OfferSection
        imageSrc={bannerImage}
        tagText="What we offer"
        title="Transform Your Body with Confidence"
        description="Unlock your ideal body with our advanced aesthetic treatments, designed to shape, define, and refine your physique. From fat removal to body contouring, we personalize every procedure to your unique goals, ensuring natural, long-lasting results. Experience a boost in confidence, enhanced physical appearance, and improved overall well-being."
        buttonText="Schedule Free Consultation"
        onButtonClick={() => navigate("/schedule-free-consultation")}
      />

      <TextWithImage
        badge="Why Hair Removal"
        title="Benefits of Body Aesthetics"
        descriptions={[
          "Achieve a contoured, youthful appearance with personalized treatments that enhance body shape, boost confidence, and improve overall well-being.",
        ]}
        buttonText="Schedule Free Consultation"
        buttonAction={() => navigate("/schedule-free-consultation")}
        imageSrc={intro}
        imageAlt="Facial Aesthetics"
        items={[
          "Enhanced Body Shape – Sculpt and define your physique.",
          "Fat Reduction – Target stubborn fat areas.",
          "Toned & Firm Skin – Improve skin elasticity.",
          "Long-Lasting Results – Enjoy lasting improvements.",
          "Minimal Downtime – Quick recovery, faster results.",
        ]}
      />

      <OurServices
        title="Transformative Treatments for Every Body"
        description="Discover a path to a more confident you with our expertly designed treatments. Each solution is crafted to meet your unique goals, helping you enhance your natural beauty and achieve the body you've always desired. Explore our offerings below and take the first step towards a transformed, confident you"
        ourServicesData={[
          {
            rotate: 12,
            service: "Abdominoplasty",
            imageSrc: abdominoplastyImage,
            url: "/body-aesthetics/abdominoplasty",
          },

          {
            rotate: -12,
            service: "Lift",
            imageSrc: bodyLiftImage,
            url: "/body-aesthetics/lift",
          },

          {
            rotate: 12,
            service: "Gynecomastia",
            imageSrc: gynecomastiaImage,
            url: "/body-aesthetics/gynecomastia",
          },
          {
            rotate: -12,
            service: "Laser Liposuction (1 region)",
            imageSrc: laserLiposuctionImage,
            url: "/body-aesthetics/laser-liposuction",
          },
          {
            rotate: 12,
            service: "BBL",
            imageSrc: bblImage,
            url: "/body-aesthetics/bbl",
          },
        ]}
      />

      <ScrollTimeline
        title="When will I see results?"
        timelineData={[
          {
            heading: "Week 02",
            // title: "",
            description:
              "Initial improvements in skin texture and tightening. Scar tissue begins to soften, and you may notice subtle changes in the overall appearance of your skin, with smoother, firmer areas starting to emerge.",
          },
          {
            heading: "Week 04",
            // title: "",
            description:
              "Skin continues to firm, and scar appearance begins to fade. The tissue becomes more resilient, and the treated areas show early signs of smoother texture, with noticeable improvements in overall skin tone.",
          },
          {
            heading: "Week 06",
            // title: "",
            description:
              "Further enhancement in skin elasticity and tone. Scar tissue continues to reduce in visibility, and the skin feels smoother and more refined, with noticeable improvements in the contour and texture of treated areas.",
          },
          {
            heading: "Week 08",
            // title: "",
            description:
              "Full results begin to show with tighter, more even skin. Scars are significantly reduced, and the tissue feels rejuvenated. The transformation is complete, leaving you with youthful and smooth skin",
          },
        ]}
      />

      <ImageComparisonSlider before={beforeImage} after={afterImage} />

      <HorizontalStories storiesData={storiesData} />
      <ConsultationForm />
    </>
  );
};

export default BodyAesthetics;
