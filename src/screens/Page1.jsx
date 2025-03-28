import React from "react";
import Breadcrumb from "../components/Breadcrumbs/Breadcrumb";
import WhatWeOffer from "../components/what-we-offer/WhatWeOffer";
import { Heading, Text } from "../components/ui";
import Button from "../components/button/Button";
import TopNavbar from "../components/Navbar.jsx/TopNavbar";
import VideoNav from "../components/navbar.jsx/VideoNav";
import TextAndDescription from "../components/text-and-description/TextAndDescription";
import OurServices from "../components/our-services/OurServices";
import { motion, AnimatePresence } from "motion/react";
import ScrollingText from "../components/scrolling-text/ScrollingText";
import ScrollTimeline from "../components/scroll-timeline/ScrollTimeline";
// import Navbar from "../components/navbar.jsx/TopNavbar";

const Page1 = () => {
  return (
    <>
      <TopNavbar />
      <VideoNav />

      <div className="flex flex-col md:flex-row w-full ">
        {/* Left Side Content */}
        <div className="flex items-center justify-center w-full my-[80px] md:w-1/2 px-[16px] md:pl-[100px] md:pe-[50px]">
          {/* Tag */}
          <div>
            <div className="flex justify-start w-full">
              <Text variant="tag" className="bg-white px-2 py-1 w-fit">
                Welcome to Primemed
              </Text>
            </div>
            {/* Heading */}
            <Heading as="h2" className="uppercase mt-[40px]">
              A Great Health Experience Awaits You
            </Heading>
            {/* Description */}
            <Text variant="body2" className="mt-[10px]">
              At Primed, we redefine medical tourism with excellence, offering
              world-class healthcare solutions tailored to your needs. Whether
              you seek aesthetic enhancements, specialized surgeries, or
              advanced medical treatments, our team of expert doctors and
              medical professionals ensures a seamless, safe, and comfortable
              journey from consultation to recovery.
            </Text>{" "}
            <Text variant="body2" className="mt-[10px]">
              We believe that healthcare should be both effective and
              stress-free. That’s why we provide personalized treatment plans,
              cutting-edge technology, and top-tier medical expertise in a warm
              and welcoming environment.
            </Text>
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

      <OurServices />
    </>
  );
};

export default Page1;
