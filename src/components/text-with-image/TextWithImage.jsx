import React from "react";
import Button from "../button/Button";
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
    <div
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } w-full my-[100px]`}
    >
      {/* Left Side Content */}
      <div className="flex items-center justify-center w-full my-[80px] md:w-1/2 px-[16px] md:pl-[100px] md:pe-[50px]">
        <div>
          {badge && (
            <div className="flex justify-start w-full">
              <p className="tag body-2">{badge}</p>
            </div>
          )}
          <h2 className="uppercase mt-[40px]">{title}</h2>

          {/* Descriptions */}
          {descriptions.map((desc, index) => (
            <p
              key={index}
              className={`body-2 mt-[${index === 0 ? "10px" : "10px"}]`}
            >
              {desc}
            </p>
          ))}
          {items?.length > 0 && (
            <ul className="mt-6 text-left space-y-2">
              {items?.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  ✓ <p className="body-2 my-[5px]">{item}</p>
                </li>
              ))}
            </ul>
          )}

          {/* Button */}
          {buttonText && (
            <Button
              buttonText={buttonText}
              onClick={buttonAction}
              className="md:mt-[40px] mt-[50px]"
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
        />
      </div>
    </div>
  );
};

export default TextWithImage;
