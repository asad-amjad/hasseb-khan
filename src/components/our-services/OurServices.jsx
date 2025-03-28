import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Heading, Text } from "../ui";
export default function OurServices() {
  const [showImage, setShowImage] = useState(false);
  const [index, setIndex] = useState("");

  const data = [
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
  ];
  return (
    <div className="flex flex-col gap-[50px] bg-[#FFF] min-w-[360px] p-[100px]">
      {/* <div className="w-full flex flex-col gap-[10px]  px-[16px] md:px-[50px] "> */}
      <Heading as="h2">OUR SERVICES </Heading>
      <Text variant="body2">
        Lorem ipsum dolor sit amet consectetur. Turpis porta elementum nibh
        fringilla. Porta in nunc tellus sit integer mauris. Dictum commodo
        tincidunt nunc tempor
      </Text>
      {/* </div> */}
      <div className="w-full flex flex-col gap-[20px] px-[16px] md:hidden">
        {data.map(({ service, url }) => {
          return (
            <div
              className="w-full height-[492px] flex flex-col gap-[15px] "
              key={service}
            >
              <img src={url} alt={`${service} image`} />
              <Heading as="h3">{service}</Heading>
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
        {data.map(({ service, url, rotate }) => {
          return (
            <div
              className="md:relative border-b-[1px] w-full flex justify-start items-start h-14 hover:bg-opacity-[0.2] "
              onMouseEnter={() => {
                setIndex(service);
                setShowImage(true);
              }}
              key={service}
            >
              <Heading as="h3" className="">
                {service}
              </Heading>

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
