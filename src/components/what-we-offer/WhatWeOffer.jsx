import React from "react";
import Button from "../button/Button";

const WhatWeOffer = ({ badge, title, description, buttonText, buttonLink }) => {
  return (
    <div className="flex flex-col items-center text-center w-full">
      <div className="mt-[60px]">
        {badge && (
          <div className="flex justify-center w-full">
            <p className="body-2 tag">{badge}</p>
          </div>
        )}
        <div className="mb-[60px] mt-[40px]">
          <h2>{title}</h2>
          <p className="body-2 max-w-[1012px]">{description}</p>
        </div>
      </div>

      <Button buttonText={buttonText} onClick={() => console.log("Clicked!")} />
    </div>
  );
};

export default WhatWeOffer;
