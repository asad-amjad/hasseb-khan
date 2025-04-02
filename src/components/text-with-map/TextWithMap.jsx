import React from "react";
import Button from "../button/Button";
import PhoneIcon from "../icons/PhoneIcon";
import MailIcon from "../icons/MailIcon";
import LocationIcon from "../icons/LocationIcon";
import TimeIcon from "../icons/TimeIcon";

const TextWithMap = ({
  badge,
  title,
  descriptions,
  buttonText,
  buttonAction,
  imageSrc,
  imageAlt = "Image",
  reverse = false,
}) => {
  const contactDetails = [
    { icon: <PhoneIcon fill="black" />, text: "+44 745 9360 750" },
    { icon: <MailIcon fill="black" />, text: "infor@infor.com" },
    {
      icon: <LocationIcon fill="black" />,
      text: "123,street 1234, 3745 Istanbul",
    },
    {
      icon: <TimeIcon fill="black" />,
      text: "Hours: Mon-Fri, 8:00 AM - 20:00 PM",
    },
  ];

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

          <div className="my-[40px]">
            <h2 className="uppercase">{title}</h2>

            {/* Descriptions */}
            <p className={`body-2 mt-[10px]`}>
              Down to earth through instruction in yoga and mindfulness for the
              benefits of all bodies
            </p>
          </div>

          {/* Descriptions */}

          <div className="rounded-lg max-w-sm mt-[40px]">
            {contactDetails.map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 mb-[40px]"
              >
                {/* <img
                  className="object-contain w-[16px] "
                  // className="object-cover w-full h-398px md:h-[860px] md:max-h-[860px]"
                  src={item.icon}
                  // alt={imageAlt}
                /> */}
                {item.icon}
                <p className="body-2">{item.text}</p>
                {/* <span className="text-gray-800"></span> */}
              </div>
            ))}
          </div>
          {/* {descriptions.map((desc, index) => (
            <p key={index} className={`body-2 mt-[${index === 0 ? "10px" : "10px"}]`}>
              {desc}
            </p>
          ))} */}

          {/* Button */}
          {buttonText && (
            <Button
              buttonText={buttonText}
              onClick={buttonAction}
              className="md:mt-[60px] mt-[50px]"
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

export default TextWithMap;
