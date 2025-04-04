import React from "react";
// import Button from "../button/Button";
// import TickIcon from "../icons/TickIcon";
// import Button from "../button/Button";

const IntroWithImage = ({
  badge,
  title,
  descriptions,

  imageSrc,
  imageAlt = "Image",
}) => {
  return (
    <div className={`flex flex-col md:flex-row w-full my-[80px] md:my-[100px]`}>
      {/* Left Side Content */}
      <div className="flex items-center justify-center w-full  md:w-1/2 px-[16px] md:pl-[100px] md:pe-[50px]">
        <div>
          {badge && (
            <div className="flex justify-start w-full">
              <p className="tag body-2">{badge}</p>
            </div>
          )}
          <div className="my-[40px]">
            <h2 className="uppercase">{title}</h2>

            {/* Descriptions */}
            {descriptions.map((desc, index) => (
              <p key={index} className={`body-2 mt-[10px]`}>
                {desc}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="md:w-1/2 flex justify-center">
        <img
          loading="lazy" // Lazy loading enabled
          className="object-cover w-full h-562px md:h-[562px] md:max-h-[562px] md:max-w-[504px] px-[16px] md:px-0"
          src={imageSrc}
          alt={imageAlt}
        />
      </div>
    </div>
  );
};

export default IntroWithImage;
