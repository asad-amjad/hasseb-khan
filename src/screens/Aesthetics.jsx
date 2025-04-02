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

import image1 from "../assets/body-aesthetics/1.png";
import image2 from "../assets/body-aesthetics/2.png";
import image3 from "../assets/body-aesthetics/3.png";
import image4 from "../assets/body-aesthetics/4.png";
// import image5 from "../assets/body-aesthetics/5.png";
// import image6 from "../assets/body-aesthetics/6.png";
// import image7 from "../assets/body-aesthetics/7.png";
// import image8 from "../assets/body-aesthetics/8.png";
// import image9 from "../assets/body-aesthetics/9.png";

const Aesthetics = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* Video Hero section */}
      <PageHero
        title="Body Aesthetics"
        description="Enhance your body's appearance with advanced aesthetic procedures, including body lifts, sculpting, and contouring for a more youthful and confident look."
      />

      <OfferSection
        imageSrc={bannerImage}
        tagText="What we offer"
        title="Transform Your Body with Confidence"
        description="Our expert team provides customized aesthetic treatments, including body lifts, sculpting, and fat reduction, ensuring natural-looking, long-lasting results tailored to your goals."
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
        title="Comprehensive Services"
        description="We offer a range of advanced body aesthetic procedures tailored to enhance your shape and confidence. From targeted fat reduction to full-body contouring, our expert team ensures natural, long-lasting results with cutting-edge techniques and personalized treatment plans designed to meet your unique needs."
        ourServicesData={[
          {
            rotate: 12,
            service: "Body Aesthetics",
            imageSrc: image1,
            url: "/aesthetics/body-aesthetics",
          },
          {
            rotate: -12,
            service: "Breast Aesthetics",
            imageSrc: image2,
            url: "/aesthetics/breast-aesthetics",
          },
          {
            rotate: 12,
            service: "Genital Aesthetics",
            imageSrc: image3,
            url: "/aesthetics/genital-aesthetics",
          },
          {
            rotate: -12,
            service: "Facial Aesthetics",
            imageSrc: image4,
            url: "/aesthetics/facial-aesthetics",
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
              "Initial healing phase with mild swelling and sensitivity.",
          },
          {
            heading: "Week 2-3",
            // title: "",
            description:
              "Visible reduction in swelling, early shape improvements.",
          },
          {
            heading: "Week 4-6",
            // title: "",
            description:
              "Noticeable contouring, firmer skin, and improved body shape.",
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

export default Aesthetics;
