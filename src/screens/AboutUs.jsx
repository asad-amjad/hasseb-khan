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
import PageHero from "../components/hero-section/PageHero";
import Image1 from "../assets/about-us/image-1.jpeg";
import MeetOurExperts from "../components/meet-our-experts/MeetOurExperts";
// import image1 from "../assets/about-us/";
// import Image1 from "../assets/hero-section/image-1.png";

const ourServicesData = [
  {
    rotate: 12,
    service: "Dentistry",
    url: "https://placehold.co/341x511",
  },
  {
    rotate: -12,
    service: "Facial aesthetics",
    url: "https://placehold.co/341x511",
  },
  {
    rotate: 12,
    service: "Breast aesthetics",
    url: "https://placehold.co/341x511",
  },
  {
    rotate: -12,
    service: "Body aesthetics",
    url: "https://placehold.co/341x511",
  },
  {
    rotate: 12,
    service: "Genital aesthetics",
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
    heading: "01",
    title: "Choose your treatment",
    description:
      "We provide expert medical solutions tailored to your needs, combining cutting-edge technology with a highly skilled team for optimal results.",
  },
  {
    heading: "02",
    title: "Get a Free Quote",
    description:
      "Receive a detailed treatment plan designed by top specialists, including transparent pricing and comprehensive guidance—no hidden costs, just expert care.",
  },
  {
    heading: "03",
    title: "Plan Your Stay",
    description:
      "Explore our exclusive accommodation options with customized hotel packages, ensuring comfort and convenience during your medical journey.",
  },
  {
    heading: "04",
    title: "Plan Your Stay",
    description:
      "Explore our exclusive accommodation options with customized hotel packages, ensuring comfort and convenience during your medical journey.",
  },
];

const AboutUs = () => {
  return (
    <>
      <PageHero
        title="About Us"
        description="Our acknowledged surgeons and aestheticians provide advanced and innovative techniques for both surgical and non-surgical solutions in Turkey."
      />

      <div className="md:p-[100px]">
        <img
          className="object-cover w-full h-398px md:h-[860px] md:max-h-[860px]"
          src={Image1}
          // alt={imageAlt}
        />
      </div>

      <TextWithImage
        badge="Welcome to Primemed"
        title="A Great Health Experience Awaits You"
        descriptions={[
          "At Primed, we redefine medical tourism with excellence, offering world-class healthcare solutions tailored to your needs. Whether you seek aesthetic enhancements, specialized surgeries, or advanced medical treatments, our team of expert doctors and medical professionals ensures a seamless, safe, and comfortable journey from consultation to recovery.",
          "We believe that healthcare should be both effective and stress-free. That’s why we provide personalized treatment plans, cutting-edge technology, and top-tier medical expertise in a warm and welcoming environment. From initial consultation to post-treatment care, our team is dedicated to delivering a smooth experience with comprehensive support at every stage.",
          "Beyond exceptional medical care, we offer full-fledged assistance, including airport transfers, accommodation arrangements, and personalized concierge services. Our goal is to make your health journey effortless, ensuring that you can focus on your recovery while enjoying the beauty and cultural richness of Turkey.",
          "With Primed, you’re not just choosing healthcare—you’re choosing quality, comfort, and a holistic approach to well-being. Let us guide you to a healthier, happier version of yourself.",
        ]}
        // buttonText="Schedule Free Consultation"
        // buttonAction={() => console.log("Clicked!")}
        imageSrc="https://placehold.co/860x756"
        imageAlt="Facial Aesthetics"
      />

      {/* Patient Stories */}
      <HorizontalStories storiesData={storiesData} />

      <MeetOurExperts/>

        {/* Our Services */}
      <OurServices ourServicesData={ourServicesData} />

      <ScrollTimeline title={"What’s Next? Your Health, Our Priority!"} timelineData={timelineData} />

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
      {/* <OurServices ourServicesData={ourServicesData} /> */}

      {/* Partners */}
      {/* <Partners /> */}


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

export default AboutUs;
