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

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <VideoHero />

      {/* Welcome Section */}
      <TextWithImage
        badge="Welcome to PrimeMed Istanbul"
        title="Where Your Health Journey Begins with Comfort & Trust"
        descriptions={[
          "Discover a new standard of care at PrimeMed Istanbul — your trusted partner in medical and aesthetic excellence. Nestled in the vibrant heart of Istanbul, we specialize in transformative facial and body procedures that blend advanced medical expertise with a warm, patient-first approach.",
          "From the moment you reach out, our English-speaking team is dedicated to guiding you through a seamless experience: transparent pricing, JCI-accredited hospitals, tailored treatment plans, and holistic post-operative support. Whether you're seeking aesthetic refinement or life-enhancing surgery, your health, safety, and satisfaction are always our top priorities.",
          "Let us help you feel confident, comfortable, and completely cared for — every step of the way.",
        ]}
        buttonText="Schedule Your Personalized Consultation"
        buttonAction={() => navigate("/schedule-free-consultation")}
        imageSrc={intro}
        imageAlt="PrimeMed Aesthetic Clinic Istanbul"
      />

      {/* Health Journey Section */}
      <div className="my-[80px] md:py-[80px] md:flex md:flex-col md:items-center">
        <div className="md:w-[1012px]">
          <TextAndDescription
            title="Your Health Journey Starts Here"
            description="We deliver specialized medical solutions tailored to your goals—be it cosmetic, restorative, or life-changing. From our advanced facilities to top-tier specialists and travel support, everything is designed to put your health and comfort first."
          />
        </div>
        <div className="mt-[40px] md:mt-[60px] w-full space-y-[10px]">
          <ScrollingText direction="left" />
          <ScrollingText direction="right" />
        </div>
      </div>

      {/* Our Services Section */}
      <OurServices
        title="Redefine Beauty, Restore Confidence"
        description="Discover a new standard of care with PrimeMed Istanbul — where medical expertise meets luxury. We offer a carefully curated selection of treatments designed to enhance your natural beauty and well-being. From life-changing hair transplants to advanced cosmetic surgery and smile-perfecting dental care, our internationally trusted team ensures exceptional results with comfort, safety, and style. Every service is delivered with precision, discretion, and a commitment to excellence"
        ourServicesData={services}
      />

      {/* Partners/Certifications */}
      <Partners />

      {/* Patient Stories */}
      <HorizontalStories storiesData={storiesData} />

      {/* Timeline: What to Expect */}
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

export default Home;
