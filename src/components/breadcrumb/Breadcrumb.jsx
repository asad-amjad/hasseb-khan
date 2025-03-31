import React from "react";

const Breadcrumb = ({ title, description }) => {
  return (
    <div className="justify-center flex my-[65px] z-20">
      <header className="max-w-[884px] text-center mx-[16px]">
        <h1>{title}</h1>
        <p className="body-2 mt-[10px]">{description}</p>
      </header>
    </div>
  );
};

export default Breadcrumb;
