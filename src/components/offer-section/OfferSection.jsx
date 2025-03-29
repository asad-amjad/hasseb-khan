import React from "react";
import Button from "../button/Button";
// import Button from "../components/button/Button";

const OfferSection = ({ imageSrc, tagText, title, description, buttonText, onButtonClick }) => {
  return (
    <div className="md:p-[100px] flex flex-col justify-center items-center">
      <img
        className="object-cover w-full h-398px md:h-[860px] md:max-h-[860px]"
        src={imageSrc}
        alt=""
      />
      <div className="md:my-[60px] md:w-[1012px]">
        <div className="flex justify-start md:justify-center w-full mb-[40px]">
          <p className="body-2 tag">{tagText}</p>
        </div>

        <div className="md:text-center">
          <h2>{title}</h2>
          <p className="body-2 w-full">{description}</p>
        </div>
      </div>

      <Button buttonText={buttonText} onClick={onButtonClick} className="w-fit" />
    </div>
  );
};

export default OfferSection;
