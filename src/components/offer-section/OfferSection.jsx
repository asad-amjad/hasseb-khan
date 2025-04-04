import React from "react";
import Button from "../button/Button";

const OfferSection = ({ imageSrc, tagText, title, description, buttonText, onButtonClick }) => {
  return (
    <div className="md:p-[100px] flex flex-col justify-center md:items-center">
      <img
        // className="object-cover w-full md:h-[860px] md:max-h-[860px]"
        className="object-cover w-full md:max-h-[860px]"
        src={imageSrc}
        alt=""
        loading="lazy" // Lazy loading enabled
      />
      <div className="md:my-[60px] mt-[80px] md:w-[1012px] mx-[16px] md:mx-0">
        <div className="flex justify-start md:justify-center w-full md:mb-[40px]">
          <p className="body-2 tag">{tagText}</p>
        </div>

        <div className="md:text-center md:my-0 my-[30px]">
          <h2>{title}</h2>
          <p className="body-2 w-full mt-[10px]">{description}</p>
        </div>
      </div>
      <Button buttonText={buttonText} onClick={onButtonClick} className="ms-[16px] md:ms-0 w-fit" />

    </div>
  );
};

export default OfferSection;
