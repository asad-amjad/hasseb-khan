import React from "react";

const TextAndDescription = ({ title, description }) => {
  return (
    <div className="flex flex-col items-center text-center w-full ">
      <h2>{title}</h2>
      <p className="body-2 mt-[10px] mx-[16px]">{description}</p>
    </div>
  );
};

export default TextAndDescription;
