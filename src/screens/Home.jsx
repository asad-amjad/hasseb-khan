import React from "react";
import { useNavigate } from "react-router-dom";

import Partners from "../components/partners/Partners";
import VideoHero from "../components/hero-section/VideoHero";
import OurServices from "../components/our-services/OurServices";
import ScrollingText from "../components/scrolling-text/ScrollingText";
import TextWithImage from "../components/text-with-image/TextWithImage";
import ScrollTimeline from "../components/scroll-timeline/ScrollTimeline";
import HorizontalStories from "../components/horizontal-stories/HorizontalStories";
import TextAndDescription from "../components/text-and-description/TextAndDescription";

//assets
import intro from "../assets/home/intro.png";
import { services, storiesData } from "../../constants";
// import ParallaxImageScroll from "../components/ParallaxImageScroll";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Video Hero section */}
      <VideoHero />

      <TextWithImage
        badge="Welcome to Primemed"
        title="A Great Health Experience Awaits You"
        descriptions={[
          "At Primed, we redefine medical tourism with excellence, offering world-class healthcare solutions tailored to your needs. Whether you seek aesthetic enhancements, specialized surgeries, or advanced medical treatments, our team of expert doctors and medical professionals ensures a seamless, safe, and comfortable journey from consultation to recovery.",
          "We believe that healthcare should be both effective and stress-free. That’s why we provide personalized treatment plans, cutting-edge technology, and top-tier medical expertise in a warm and welcoming environment.",
        ]}
        buttonText="Schedule Free Consultation"
        buttonAction={() => navigate("/schedule-free-consultation")}
        imageSrc={intro}
        imageAlt="Facial Aesthetics"
      />

      <div className="my-[80px] md:py-[250px] md:flex md:flex-col md:items-center">
        <div className="md:w-[1012px]">
          <TextAndDescription
            title="Your Health Journey Starts Here"
            description="From aesthetic transformations to life-changing medical treatments, we offer specialized healthcare solutions designed for you. Our advanced technology, expert specialists, and personalized approach ensure exceptional results, making your health and comfort our top priority."
          />
        </div>
        <div className="mt-[40px] md:mt-[60px] w-full space-y-[10px]">
          <ScrollingText direction="left" />
          <ScrollingText direction="right" />
        </div>
      </div>
      {/* <ParallaxImageScroll/> */}
      {/* Our Services */}
      <OurServices
        title="Our Services"
        description="Lorem ipsum dolor sit amet consectetur. Turpis porta elementum nibh fringilla. Porta in nunc tellus sit integer mauris. Dictum commodo tincidunt nunc tempor"
        ourServicesData={services}
      />

      {/* Partners */}
      <Partners />

      <HorizontalStories storiesData={storiesData} />

      <ScrollTimeline
        title="When Will I See Results?"
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

export default Home;
