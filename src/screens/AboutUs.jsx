import React from "react";
// import { useNavigate } from "react-router-dom";

import OurServices from "../components/our-services/OurServices";
import ScrollTimeline from "../components/scroll-timeline/ScrollTimeline";
import HorizontalStories from "../components/horizontal-stories/HorizontalStories";

import TextWithImage from "../components/text-with-image/TextWithImage";
import PageHero from "../components/hero-section/PageHero";
import MeetOurExperts from "../components/meet-our-experts/MeetOurExperts";
import MeetOurExpert from "../components/meet-our-expert/MeetOurExpert";
import { services, storiesData } from "../../constants";

// Assets
import bannerImage from "../assets/about-us/banner.jpeg";
import intro from "../assets/about-us/intro.png";

import expert1 from "../assets/about-us/expert-1.jpeg";
import expert2 from "../assets/about-us/expert-2.jpeg";
import expert3 from "../assets/about-us/expert-3.jpeg";
import expert4 from "../assets/about-us/expert-4.jpeg";

const AboutUs = () => {
  // const navigate = useNavigate();
  return (
    <>
      <PageHero
        title="About Us"
        description="We are PrimeMed Istanbul — a trusted medical travel partner offering expert-led aesthetic, dental, and hair restoration treatments. Combining world-class care with personalized service, we help international patients achieve life-changing results in one of the world’s leading health tourism destinations."
      />

      <div className="md:p-[100px]">
        <img
          // className="object-cover w-full h-398px md:h-[860px] md:max-h-[860px]"
          className="object-cover w-full md:max-h-[860px]"
          src={bannerImage}
          loading="lazy" // Lazy loading enabled
          alt="image"
        />
      </div>

      <TextWithImage
        badge="Welcome to PrimeMed"
        title="A Great Health Experience Awaits You"
        descriptions={[
          "At PrimeMed, we redefine medical tourism with excellence, offering world-class healthcare solutions tailored to your needs. Whether you seek aesthetic enhancements, specialized surgeries, or advanced medical treatments, our team of expert doctors and medical professionals ensures a seamless, safe, and comfortable journey from consultation to recovery.",
          "We believe that healthcare should be both effective and stress-free. That’s why we provide personalized treatment plans, cutting-edge technology, and top-tier medical expertise in a warm and welcoming environment. From initial consultation to post-treatment care, our team is dedicated to delivering a smooth experience with comprehensive support at every stage.",
          "Beyond exceptional medical care, we offer full-fledged assistance, including airport transfers, accommodation arrangements, and personalized concierge services. Our goal is to make your health journey effortless, ensuring that you can focus on your recovery while enjoying the beauty and cultural richness of Turkey.",
          "With PrimeMed, you’re not just choosing healthcare—you’re choosing quality, comfort, and a holistic approach to well-being. Let us guide you to a healthier, happier version of yourself.",
        ]}
        // buttonText="Schedule Free Consultation"
        // buttonAction={() => console.log("Clicked!")}
        imageSrc={intro}
        imageAlt="Facial Aesthetics"
      />

      <HorizontalStories storiesData={storiesData} />
      <MeetOurExpert
        storiesData={[
          {
            name: "Buse Nur Gündüz",
            role: "Specialist",
            image: expert1,
          },
          {
            name: "Hadi Kubilay Altınok",
            role: "Specialist",
            image: expert2,
          },
          {
            name: "Esat Doğancan Alosman",
            role: "Specialist",
            image: expert3,
          },
          {
            name: "Fevzi Oğulcan Utlu",
            role: "Specialist",
            image: expert4,
          },
        ]}
      />

      {/* <MeetOurExperts /> */}

      {/* Our Services */}
      <OurServices
        title="Our Services"
        description="Lorem ipsum dolor sit amet consectetur. Turpis porta elementum nibh fringilla. Porta in nunc tellus sit integer mauris. Dictum commodo tincidunt nunc tempor"
        ourServicesData={services}
      />

      <ScrollTimeline
        title="Your Journey with PrimeMed"
        timelineData={[
          {
            heading: "01",
            title: "Select Your  Treatment",
            description:
              "Explore our range of medical and aesthetic services. From hair transplants to cosmetic surgery, our team will guide you to the perfect option tailored to your goals.",
          },
          {
            heading: "02",
            title: "Get a Treatment Plan",
            description:
              "Receive a customized plan crafted by our experienced medical team—including a transparent, detailed quote with no hidden costs. Quick, confidential and stress-free.",
          },
          {
            heading: "03",
            title: "Plan Your Trip with Ease",
            description:
              "Enjoy stress-free travel with our VIP service: curated hotel stays, airport pickup, and dedicated local support to ensure your comfort throughout your stay.",
          },
          {
            heading: "04",
            title: "Experience Care",
            description:
              "From the moment you arrive to your full recovery, PrimeMed ensures expert care, multilingual support, and a seamless, comfortable journey you can trust.",
          },
        ]}
      />
    </>
  );
};

export default AboutUs;
