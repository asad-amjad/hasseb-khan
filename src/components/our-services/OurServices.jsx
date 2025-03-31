import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function OurServices({
  ourServicesData,
  title,
  description,
  bgColor = "#FFF",
}) {
  const [showImage, setShowImage] = useState(false);
  const [index, setIndex] = useState("");

  return (
    <div
      className={`flex flex-col bg-[${bgColor}] min-w-[360px] px-[16px] py-[80px] md:p-[100px] `}
    >
      {/* <div className="w-full flex flex-col gap-[10px]  px-[16px] md:px-[50px] "> */}
      <h2>{title}</h2>
      <p className="body-2 mt-[10px]">{description}</p>
      {/* </div> */}
      <div className="w-full flex flex-col gap-[50px] md:px-[16px] md:hidden mt-[50px]">
        {ourServicesData.map(({ service, imageSrc }) => {
          return (
            <div key={service}>
              {/* <div className="mb-[50px]" /> */}
              <div className="w-full height-[492px] flex flex-col gap-[20px] ">
                <img src={imageSrc} alt={`${service} image`} />
                <h3 className="border-b-[1px] pb-[20px]">{service}</h3>
              </div>
            </div>
          );
        })}
      </div>

      {/* Desktop view */}
      <div
        className="hidden  md:w-full md:flex md:flex-col  mt-[50px]"
        onMouseLeave={() => {
          setTimeout(() => {
            setShowImage(false);
          }, 500);
        }}
      >
        {ourServicesData.map(({ service, imageSrc, rotate }) => (
          <div key={service}>
            <div
              className="md:relative border-b-[1px] cursor-pointer  w-full flex hover:bg-opacity-[0.2]" // Added margin-bottom
              onMouseEnter={() => {
                setIndex(service);
                setShowImage(true);
              }}
              onMouseLeave={() => setShowImage(false)}
            >
              <h3 className="leading-[36px] mb-[25px] ">{service}</h3>

              <AnimatePresence>
                {index === service && showImage && (
                  <motion.img
                    key={service}
                    className="md:h-[400px] md:w-[275px] absolute right-20 top-[-100%] rotate-12 z-20"
                    src={imageSrc}
                    initial={{
                      opacity: 0.5,
                      scale: 0,
                      rotate: 0,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      rotate,
                    }}
                    exit={{ opacity: 0.25, scale: 0, rotate: 0 }}
                    transition={{ duration: 0.5, type: "tween" }}
                  />
                )}
              </AnimatePresence>
            </div>
            <div className="mb-[25px]"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
