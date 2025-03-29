import React from "react";
import Button from "../button/Button";

import Image3 from "../../assets/contact-us/image-3.png";
const ImageWithForm = ({}) => {
  return (
    <div className={`flex flex-col md:flex-row w-full my-[100px]`}>
      {/* Left Side Content */}
      <div className="md:w-1/2">
        <img
          className="w-full  md:w-[520px] mx-auto"
          src={Image3}
          alt={"imageAlt"}
        />
      </div>

      {/* Right Side Image */}
      <div className="flex items-center justify-center w-full my-[80px] md:w-1/2 px-[16px] md:pe-[100px] md:pl-[50px]">
        <div>
          <div className="flex justify-start w-full">
            <p className="tag body-2">Contact Us</p>
          </div>

          <h2 className="uppercase mt-[40px]">Ask a Question</h2>

          {/* Descriptions */}
          <p className={`body-2 mt-[10px]`}>
            Down to earth through instruction in yoga and mindfulness for the
            benefits of all bodies
          </p>

          <form className="space-y-[16px] mt-[40px]">
            <input
              type="text"
              placeholder="Full Name"
              className="input-field"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="input-field"
            />

            <textarea
              placeholder="Your Message"
              className="input-field min-h-[150px] p-[14px] md:min-h-[124px] w-full"
            ></textarea>

            <Button
              buttonText="Schedule Free Consultation"
              onClick={() => console.log("Clicked!")}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ImageWithForm;
