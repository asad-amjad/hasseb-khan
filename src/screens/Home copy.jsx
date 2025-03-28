import React from "react";
// import Breadcrumb from "../components/Breadcrumbs/Breadcrumb";
import WhatWeOffer from "../components/what-we-offer/WhatWeOffer";
import Button from "../components/button/Button";
import TopNavbar from "../components/layout/TopNavbar";
import VideoNav from "../components/layout/video-header/VideoHeader";
import TextAndDescription from "../components/text-and-description/TextAndDescription";
import OurServices from "../components/our-services/OurServices";
// import { motion, AnimatePresence } from "motion/react";
import ScrollingText from "../components/scrolling-text/ScrollingText";
import ScrollTimeline from "../components/scroll-timeline/ScrollTimeline";
import HorizontalStories from "../components/horizontal-stories/HorizontalStories";
import Partners from "../components/partners/Partners";
import ConsultationForm from "../components/consultation-form/ConsultationForm";

const Home = () => {
  return (
    <>
      <div className="p-6">
        <h1>This is H1 Heading</h1>
        <h2>This is H2 Heading</h2>
        <h3>This is H3 Heading</h3>
        <h4>This is H4 Heading</h4>
        <h5>This is H5 Heading</h5>
        <h6>This is H6 Heading</h6>
      </div>

      <div className="p-6">
        <p>This is a normal paragraph (inherits global styles).</p>
        <p className="body-1">This is Body 1 text.</p>
        <p className="body-2">This is Body 2 text.</p>
      </div>

      <div className="p-6">
        <p className="small">This is small text.</p>
        <p className="extra-small">This is extra-small text.</p>
      </div>

      <div className="p-6">
        <h1 className="heading-primary">Primary Heading</h1>
        <h2 className="heading-secondary">Secondary Heading</h2>
        <h3 className="sub-heading">Sub Heading</h3>
      </div>

      <TopNavbar />
      <VideoNav />
      <WhatWeOffer
        badge="What we offer"
        title="REFINE, REJUVENATE & RESTORE"
        description="Our expert facial aesthetic treatments include contouring, skin tightening, and volume restoration, delivering natural, youthful, and long-lasting results with precision."
        buttonText="Schedule Free Consultation"
        buttonLink="#"
      />

      <ConsultationForm />
      <div className="flex flex-col md:flex-row w-full ">
        {/* Left Side Content */}
        <div className="flex items-center justify-center w-full my-[80px] md:w-1/2 px-[16px] md:pl-[100px] md:pe-[50px]">
          <div>
            <div className="flex justify-start w-full">
              <p className="tag body-2">Welcome to Primemed</p>
            </div>
            <h2 className="uppercase mt-[40px]">
              A Great Health Experience Awaits You
            </h2>
            {/* Description */}
            <p className="body-2 mt-[10px]">
              At Primed, we redefine medical tourism with excellence, offering
              world-class healthcare solutions tailored to your needs. Whether
              you seek aesthetic enhancements, specialized surgeries, or
              advanced medical treatments, our team of expert doctors and
              medical professionals ensures a seamless, safe, and comfortable
              journey from consultation to recovery.
            </p>{" "}
            <p className="mt-[10px]">
              We believe that healthcare should be both effective and
              stress-free. That’s why we provide personalized treatment plans,
              cutting-edge technology, and top-tier medical expertise in a warm
              and welcoming environment.
            </p>
            {/* Button */}
            <Button
              buttonText="Schedule Free Consultation"
              onClick={() => console.log("Clicked!")}
              className="md:mt-[60px] mt-[50px]"
            />
          </div>
        </div>

        {/* Right Side Image */}
        <div className="md:w-1/2">
          <img
            className="object-cover w-full h-398px md:h-[860px] md:max-h-[860px]"
            src="/services/image-2.png"
            alt="Facial Aesthetics"
          />
        </div>
      </div>

      <div className="my-[80px] md:my-[250px]">
        <TextAndDescription
          title="Your Health Journey Starts Here"
          description="From aesthetic transformations to life-changing medical treatments, we offer specialized healthcare solutions designed for you. Our advanced technology, expert specialists, and personalized approach ensure exceptional results, making your health and comfort our top priority."
        />
        <div className="mt-[40px] md:mt-[60px]  space-y-[10px]">
          <ScrollingText direction="left" />
          <ScrollingText direction="right" />
        </div>
      </div>

      <ScrollTimeline />
      <Partners />
      <OurServices />

      <HorizontalStories />
    </>
  );
};

export default Home;
