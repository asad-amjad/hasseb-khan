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
        description="Our acknowledged surgeons and aestheticians provide advanced and innovative techniques for both surgical and non-surgical solutions in Turkey."
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
        imageSrc={intro}
        imageAlt="Facial Aesthetics"
      />

      <HorizontalStories storiesData={storiesData} />
      <MeetOurExpert
        storiesData={[
          {
            name: "Dr. Nayrouz Gezaf",
            role: "Specialist Obstetrics & Gynecology",
            image: expert1,
          },
          {
            name: "Dr. Sulman",
            role: "Specialist Obstetrics",
            image: expert2,
          },
          {
            name: "Dr. Khan",
            role: "Specialist Obstetrics",
            image: expert3,
          },
          {
            name: "Dr. Jack",
            role: "Specialist Obstetrics",
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
        title={"What’s Next? Your Health, Our Priority!"}
        timelineData={[
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
        ]}
      />
    </>
  );
};

export default AboutUs;
