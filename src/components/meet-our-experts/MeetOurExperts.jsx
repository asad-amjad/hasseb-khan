import React from "react";
// import Button from "../button/Button";
import Image2 from "../../assets/about-us/image-2.png";

const MeetOurExperts = () => {
  return (
    <div className="flex justify-center items-center py-[100px] px-[16px] md:px-0 ">
      <div className="md:w-[1312px] w-full">
        <div className="w-full flex justify-center ">
          <div className="mb-[30px] md:text-center w-[1012px]">
            <h2>Meet our experts</h2>
            <p className="body-2 px-[10px]">
              Lorem ipsum dolor sit amet consectetur. Turpis porta elementum
              nibh fringilla. Porta in nunc tellus sit integer mauris. Dictum
              commodo tincidunt nunc tempor
            </p>
          </div>
        </div>

        <div className="pt-[75px] bg-white">
          <img
            // className="object-cover w-full h-398px md:h-[860px] md:max-h-[860px]"
            className="w-full "
            src={Image2}
            loading="lazy" // Lazy loading enabled
            // alt={imageAlt}
          />
        </div>
      </div>
    </div>
  );
};

export default MeetOurExperts;
