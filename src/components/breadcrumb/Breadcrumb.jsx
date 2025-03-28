import React from "react";

const Breadcrumb = ({ title, description }) => {
  return (
    <div className="justify-center flex my-[65px] z-20">
      <header className="max-w-[689px] text-center">
        <h1>{title}</h1>
        <p className="body-2">{description}</p>
      </header>
    </div>
  );
};

export default Breadcrumb;
