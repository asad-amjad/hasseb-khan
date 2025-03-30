import React from "react";

import OurServices from "../components/our-services/OurServices";
import ScrollTimeline from "../components/scroll-timeline/ScrollTimeline";
import HorizontalStories from "../components/horizontal-stories/HorizontalStories";

import TextWithImage from "../components/text-with-image/TextWithImage";
import PageHero from "../components/hero-section/PageHero";
import MeetOurExperts from "../components/meet-our-experts/MeetOurExperts";

// Assets
import bannerImage from "../assets/about-us/banner.jpeg";
import intro from "../assets/about-us/intro.png";

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
          src={bannerImage}
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

      <MeetOurExperts />

      {/* Our Services */}
      <OurServices
        title="Our Services"
        description="Lorem ipsum dolor sit amet consectetur. Turpis porta elementum nibh fringilla. Porta in nunc tellus sit integer mauris. Dictum commodo tincidunt nunc tempor"
        ourServicesData={[
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
        ]}
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
