import React from "react";
import { useNavigate } from "react-router-dom";

import PageHero from "../../components/hero-section/PageHero";
import ScrollTimeline from "../../components/scroll-timeline/ScrollTimeline";
import ConsultationForm from "../../components/consultation-form/ConsultationForm";
import HorizontalStories from "../../components/horizontal-stories/HorizontalStories";
import ImageComparisonSlider from "../../components/image-comparison-slider/ImageComparisonSlider";

// Assets
import bannerImage from "../../assets/dental/banner.png";
import introImage from "../../assets/dental/intro.png";
import { storiesData } from "../../../constants";
import IntroWithImage from "../../components/intro-with-image/IntroWithImage";
import ServiceDetails from "../../components/service-details/ServiceDetails";

const Orthodontics = () => {
  return (
    <>
      {/* Video Hero section */}
      <PageHero
        title="Craft Your Perfect Smile"
        description="Discover the art of creating beautiful, natural smiles through advanced aesthetic dentistry. From teeth whitening to comprehensive smile makeovers, we offer cutting-edge treatments tailored to your desires."
      />
      <div className="md:pt-[100px]">
        <img
          className="object-cover w-full h-398px md:h-[860px] md:max-h-[860px]"
          src={bannerImage}
          alt="image"
        />
      </div>

      <IntroWithImage
        badge="Introduction"
        title="About Aesthetic Dentistry"
        descriptions={[
          "Aesthetic Dentistry at Primed is dedicated to enhancing your smile’s appearance and health. Our team of experts utilizes innovative techniques and high-quality materials to achieve stunning, natural results. Whether you desire subtle improvements or a dramatic transformation, we ensure a comfortable and personalized journey.",
        ]}
        imageSrc={introImage}
      />

      <ServiceDetails
        title="Comprehensive Services"
        ourServicesData={[
          {
            service: "Hollywood Smile",
            description:
              "Achieve a red-carpet-ready smile with a custom-designed Hollywood Smile. Combining veneers, crowns, and teeth whitening, this comprehensive approach ensures a flawless, bright, and harmonious appearance.",
          },
          {
            service: "Laminate Veneers",
            description:
              "Ultra-thin shells designed to correct imperfections, providing a natural and durable enhancement to your smile with minimal tooth preparation.",
          },
          {
            service: "Zirconium Crowns",
            description:
              "Metal-free, durable crowns offering exceptional strength and aesthetics, blending seamlessly with your natural teeth for a radiant smile.",
          },
          {
            service: "Emax Crowns",
            description:
              "Known for their aesthetic excellence, Emax Crowns provide long-lasting results with superior translucency and durability. Ideal for front teeth restorations.",
          },
          {
            service: "Porcelain Crowns",
            description:
              "Classic crowns crafted to restore function and beauty, providing a natural appearance with high durability.",
          },
          {
            service: "Teeth Whitening",
            description:
              "Brighten your smile with safe, professional treatments designed to remove stains and enhance your teeth’s radiance.",
          },
          {
            service: "Pink Aesthetic (Gum Contouring)",
            description:
              "Reshape and enhance your gums for a balanced, symmetrical smile with natural beauty.",
          },
          {
            service: "Personal Smile Makeover",
            description:
              "A comprehensive approach combining multiple treatments to achieve your ideal smile, tailored to your unique facial features and goals.",
          },
          {
            service: "Bonding",
            description:
              "Quick and effective treatment for minor imperfections, enhancing the shape, color, and overall appearance of teeth.",
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

export default Orthodontics;
