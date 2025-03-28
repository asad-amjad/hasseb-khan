import React from "react";

const Home = () => {
  return (
    <>
      <div className="p-6">
        <h1>This is H1 Heading</h1>
        <h2>This is H2 Heading</h2>
        <h3>This is H3 Heading</h3>
        <h4>This is H4 Heading</h4>
        <h5>This is H5 Heading</h5>
        <h6>This is H6 Heading</h6>
      </div>

      <div className="p-6">
        <p>This is a normal paragraph (inherits global styles).</p>
        <p className="body-1">This is Body 1 text.</p>
        <p className="body-2">This is Body 2 text.</p>
      </div>

      <div className="p-6">
        <p className="small">This is small text.</p>
        <p className="extra-small">This is extra-small text.</p>
      </div>

      <div className="p-6">
        <h1 className="heading-primary">Primary Heading</h1>
        <h2 className="heading-secondary">Secondary Heading</h2>
        <h3 className="sub-heading">Sub Heading</h3>
      </div>
    </>
  );
};

export default Home;
