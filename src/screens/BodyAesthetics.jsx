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

const BodyAesthetics = () => {
  return (
    <>
      {/* Video Hero section */}
      <PageHero
        title="Body Aesthetics"
        description="Enhance your body's appearance with advanced aesthetic procedures, including body lifts, sculpting, and contouring for a more youthful and confident look."
      />

      <OfferSection
        imageSrc={Image1}
        tagText="What we offer"
        title="Transform Your Body with Confidence"
        description="Our expert team provides customized aesthetic treatments, including body lifts, sculpting, and fat reduction, ensuring natural-looking, long-lasting results tailored to your goals."
        buttonText="Schedule Free Consultation"
        onButtonClick={() => console.log("Consultation Scheduled!")}
      />

      <TextWithImage
        badge="Why Hair Removal"
        title="Benefits of Body Aesthetics"
        descriptions={[
          "Achieve a contoured, youthful appearance with personalized treatments that enhance body shape, boost confidence, and improve overall well-being.",
        ]}
        buttonText="Schedule Free Consultation"
        buttonAction={() => console.log("Clicked!")}
        imageSrc={Image1}
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
            service: "Abdomnioplasty",
            url: "https://placehold.co/341x511",
          },
          {
            rotate: -12,
            service: "360 Abdomnioplasty",
            url: "https://placehold.co/341x511",
          },
          {
            rotate: 12,
            service: "Mini Abdomnioplasty",
            url: "https://placehold.co/341x511",
          },
          {
            rotate: -12,
            service: "Arm lift",
            url: "https://placehold.co/341x511",
          },
          {
            rotate: 12,
            service: "Back lift",
            url: "https://placehold.co/341x511",
          },
          {
            rotate: -12,
            service: "Thigh lift",
            url: "https://placehold.co/341x511",
          },
          {
            rotate: 12,
            service: "Gynecomastia",
            url: "https://placehold.co/341x511",
          },
          {
            rotate: -12,
            service: "Vaser Liposuction I reagion",
            url: "https://placehold.co/341x511",
          },
          {
            rotate: 12,
            service: "BBL",
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

export default BodyAesthetics;
