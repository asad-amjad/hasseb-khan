import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function OurServices({ourServicesData}) {
  const [showImage, setShowImage] = useState(false);
  const [index, setIndex] = useState("");


  return (
    <div className="flex flex-col gap-[50px] bg-[#FFF] min-w-[360px] p-[16px] md:p-[100px]">
      {/* <div className="w-full flex flex-col gap-[10px]  px-[16px] md:px-[50px] "> */}
      <h2>OUR SERVICES </h2>
      <p className="body-2">
        Lorem ipsum dolor sit amet consectetur. Turpis porta elementum nibh
        fringilla. Porta in nunc tellus sit integer mauris. Dictum commodo
        tincidunt nunc tempor
      </p>
      {/* </div> */}
      <div className="w-full flex flex-col gap-[20px] md:px-[16px] md:hidden">
        {ourServicesData.map(({ service, url }) => {
          return (
            <div
              className="w-full height-[492px] flex flex-col gap-[15px] "
              key={service}
            >
              <img src={url} alt={`${service} image`} />
              <h3>{service}</h3>
            </div>
          );
        })}
      </div>
      <div
        className="hidden  md:w-full md:flex md:flex-col md:gap-[20px] cursor-pointer"
        onMouseLeave={() => {
          setTimeout(() => {
            setShowImage(false);
          }, 500);
        }}
      >
        {ourServicesData.map(({ service, url, rotate }) => {
          return (
            <div
              className="md:relative border-b-[1px] w-full flex justify-start items-start h-14 hover:bg-opacity-[0.2] "
              onMouseEnter={() => {
                setIndex(service);
                setShowImage(true);
              }}
              key={service}
            >
              <h3 className="">{service}</h3>

              <AnimatePresence>
                {index === service && showImage && (
                  <motion.img
                    key={service}
                    className="md:h-[400px] md:w-[275px] absolute right-20 top-[-100%]  rotate-12 z-20"
                    src={url}
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
          );
        })}
      </div>
    </div>
  );
}
