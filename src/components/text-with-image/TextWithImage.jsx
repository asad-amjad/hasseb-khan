import React from "react";
import Button from "../button/Button";
import TickIcon from "../icons/TickIcon";
// import Button from "../button/Button";

const TextWithImage = ({
  badge,
  title,
  descriptions,
  buttonText,
  buttonAction,
  imageSrc,
  imageAlt = "Image",
  reverse = false,
  items = [],
}) => {
  return (
    <div className={`flex flex-col md:flex-row w-full`}>
      {/* Left Side Content */}
      <div className="flex items-center justify-center w-full my-[80px] md:w-1/2 px-[16px] md:pl-[100px] md:pe-[50px]">
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
            {items?.length > 0 && (
              <ul className="text-left space-y-[20px] mt-[30px]">
                {items?.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <TickIcon/> <p className="body-2">{item}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Button */}
          {buttonText && (
            <Button
              buttonText={buttonText}
              onClick={buttonAction}
              className=""
            />
          )}
        </div>
      </div>

      {/* Right Side Image */}
      <div className="md:w-1/2">
        <img
          className="object-cover w-full h-398px md:h-[860px] md:max-h-[860px]"
          src={imageSrc}
          alt={imageAlt}
          loading="lazy" // Lazy loading enabled
        />
      </div>
    </div>
  );
};

export default TextWithImage;
