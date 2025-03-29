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

const ourServicesData = [
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
    service: "Gynecomastia",
    url: "https://placehold.co/341x511",
  },
  {
    rotate: 12,
    service: "Back lift",
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
];

const storiesData = [
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
];

const timelineData = [
  {
    heading: "Week 1",
    // title: "Choose your treatment",
    description: "Initial healing phase with mild swelling and sensitivity.",
  },
  {
    heading: "Week 2-3",
    // title: "Get a Free Quote",
    description: "Visible reduction in swelling, early shape improvements.",
  },
  {
    heading: "Week 4-6",
    // title: "Plan Your Stay",
    description: "Noticeable contouring, firmer skin, and improved body shape.",
  },
];
const benefits = [
  "Enhanced Body Shape – Sculpt and define your physique.",
  "Fat Reduction – Target stubborn fat areas.",
  "Toned & Firm Skin – Improve skin elasticity.",
  "Long-Lasting Results – Enjoy lasting improvements.",
  "Minimal Downtime – Quick recovery, faster results.",
];

const GastricSleeve = () => {
  return (
    <>
      {/* Video Hero section */}

      {/* <VideoHero /> */}

      <PageHero
        title="Body Aesthetics"
        description="Enhance your body's appearance with advanced aesthetic procedures, including body lifts, sculpting, and contouring for a more youthful and confident look."
      />

      <div className="md:p-[100px] md:pb-0">
        <img
          className="object-cover w-full h-398px md:h-[860px] md:max-h-[860px]"
          src={Image1}
          // alt={imageAlt}
        />

        {/* <div className="flex justify-center">
          <div className="w-[1012px] flex justify-center flex-col items-center">
            <div className="flex justify-center w-full md:my-[80px]">
              <p className="tag body-2">Why Hair Removal</p>
            </div>
            <TextWithBullets
              title="Benefits of Body Aesthetics"
              description="From aesthetic transformations to life-changing medical treatments, we offer specialized healthcare solutions designed for you. Our advanced technology, expert specialists, and personalized approach ensure exceptional results, making your health and comfort our top priority."
            />
            <Button
              buttonText={"Schedule free Consultation"}
              onClick={() => {}}
              className="mt-[50px] w-fit"
            />
          </div>
        </div> */}
      </div>

      <TextWithImage
        badge="Welcome to Primemed"
        title="A Great Health Experience Awaits You"
        descriptions={[]}
        buttonText="Schedule Free Consultation"
        buttonAction={() => console.log("Clicked!")}
        imageSrc="/services/image-2.png"
        imageAlt="Facial Aesthetics"
        items={benefits}
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
        description="We offer a range of advanced body aesthetic procedures tailored to enhance your shape and confidence. From targeted fat reduction to full-body contouring, our expert team ensures natural, long-lasting results with cutting-edge techniques and personalized treatment plans designed to meet your unique needs."
        ourServicesData={ourServicesData}
      />
      <ScrollTimeline
        title="When will I see results?"
        timelineData={timelineData}
      />
      {/* Partners */}
      {/* <Partners /> */}

      <HorizontalStories storiesData={storiesData} />
      <ConsultationForm />

      <ImageComparisonSlider
        before="https://placehold.co/960x456?text=Hello+World"
        after="https://placehold.co/960x456?text=Hiiiii+World"
      />
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

export default GastricSleeve;
