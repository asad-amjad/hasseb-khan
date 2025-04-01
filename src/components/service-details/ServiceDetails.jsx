import React, { useState } from "react";
// import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function ServiceDetails({
  ourServicesData,
  title,
  description,
  bgColor = "#E9ECF1",
}) {
  const [showImage, setShowImage] = useState(false);
  const [index, setIndex] = useState("");

  return (
    <div
      className={`flex flex-col bg-[#E9ECF1] min-w-[360px] px-[16px] py-[80px] md:p-[100px]`}
    >
      <h2>{title}</h2>
      <p className="body-2 mt-[10px]">{description}</p>

      {/* Mobile View */}
      <div className="w-full flex flex-col gap-[50px] md:px-[16px] md:hidden mt-[50px]">
        {ourServicesData.map(({ service, description }) => (
          <div key={service}>
            <div className="w-full height-[492px] flex flex-col gap-[20px]">
              {/* <img src={imageSrc} alt={`${service} image`} /> */}
              {/* <Link
                to={url}
                className="relative transition-all duration-300 ease-in-out text-black hover:text-[#1F385F]"
              > */}
              <h3 className="border-[#1F385F]  border-b-[1px] border-opacity-10 pb-[20px] ">
                {service}
              </h3>
              <p className="body-2 mt-[10px]">{description}</p>
              {/* </Link> */}
            </div>
          </div>
        ))}
      </div>

      {/* Desktop View */}
      <div
        className="hidden md:w-full md:flex md:flex-col mt-[50px]"
        onMouseLeave={() => {
          setTimeout(() => {
            setShowImage(false);
          }, 500);
        }}
      >
        {ourServicesData.map(({ service, imageSrc, rotate, description }) => (
          <div key={service}>
            <div
              className="border-[#1F385F] border-b-[1px]  border-opacity-10 w-full flex flex-col"
              // onMouseEnter={() => {
              //   setIndex(service);
              //   setShowImage(true);
              // }}
              // onMouseLeave={() => setShowImage(false)}
            >
              {/* <Link to={url}>
                <h3 className="leading-[36px] mb-[25px] hover:text-blue-500">
                  {service}
                </h3>
              </Link> */}

              {/* <Link
                to={url}
                className="relative transition-all duration-300 ease-in-out text-black hover:text-[#1F385F]"
              > */}
              <div className="pb-[20px]">
                <h3>{service}</h3>
                <p className="body-2 mt-[10px]">{description}</p>
              </div>

              {/* </Link> */}

              {/* <AnimatePresence>
                {index === service && showImage && (
                  <motion.img
                    key={service}
                    className="md:h-[400px] md:w-[275px] absolute right-20 top-[-100%] rotate-12 z-20"
                    src={imageSrc}
                    initial={{ opacity: 0.5, scale: 0, rotate: 0 }}
                    animate={{ opacity: 1, scale: 1, rotate }}
                    exit={{ opacity: 0.25, scale: 0, rotate: 0 }}
                    transition={{ duration: 0.5, type: "tween" }}
                  />
                )}
              </AnimatePresence> */}
            </div>
            <div className="mb-[20px]"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
