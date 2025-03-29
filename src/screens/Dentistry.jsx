import React from "react";
// import Breadcrumb from "../components/Breadcrumbs/Breadcrumb";
import WhatWeOffer from "../components/what-we-offer/WhatWeOffer";
import Button from "../components/button/Button";
import TextAndDescription from "../components/text-and-description/TextAndDescription";
import OurServices from "../components/our-services/OurServices";
import ScrollingText from "../components/scrolling-text/ScrollingText";
import ScrollTimeline from "../components/scroll-timeline/ScrollTimeline";
import HorizontalStories from "../components/horizontal-stories/HorizontalStories";
import Partners from "../components/partners/Partners";
import ConsultationForm from "../components/consultation-form/ConsultationForm";

import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import TextWithImage from "../components/text-with-image/TextWithImage";
import VideoHero from "../components/hero-section/VideoHero";
import PageHero from "../components/hero-section/PageHero";
import Image1 from "../assets/about-us/image-1.jpeg";
import ImageComparisonSlider from "../components/image-comparison-slider/ImageComparisonSlider";
import OfferSection from "../components/offer-section/OfferSection";

const Dentistry = () => {
  return (
    <>
      {/* Video Hero section */}
      <PageHero
        title="Dentistry"
        description="Enhance your smile with advanced aesthetic dentistry, designed to improve tooth shape, color, and alignment for a confident, radiant appearance."
      />

      <OfferSection
        // imageSrc={Image1}
        imageSrc={"https://s3-alpha-sig.figma.com/img/63b0/cddb/39e84a3ff159180a0e5ea0a7dd306549?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HqLHQiDpW3S26MTAyrHDUIxkZUAf77Je3MeefctbQQEM07liAvJTMTJCz1QZDAI~GSLgYJBxr0MT8tJEBXNuDs2G13eAflNAVxITuImxxwxP0yEZmU1aR0qGrBefC5HZaTZyHv4KXgc-dkRSwH2exEAwGIwJ9KbQku2epU0PnfPcsHl7HKcGjcciBWg-Bwl3PPTtXSKzvOPNOx5CNaObSC9zUwRGKi0gcneplhJeIWBwB8GGH8G4dauVP051Mro-FGfu8Ro~UxbFl9LWnRI6UMdXoqnUzqe6ZlAQ~RoGRv4oFkfWUCzIhcSABN2WhaTFZQLLd1rw14bAAKv3me5uTg__"}
        tagText="What we offer"
        title="Perfect Your Smile with Precision"
        description="Our aesthetic dentistry services provide customized treatments, including teeth whitening, veneers, and smile makeovers, ensuring natural-looking, long-lasting results."
        buttonText="Schedule Free Consultation"
        onButtonClick={() => console.log("Consultation Scheduled!")}
      />

      <TextWithImage
        badge="Why Dentistry"
        title="Benefits of Dentistry"
        descriptions={[
          "Transform your smile with expert treatments that enhance tooth appearance, boost confidence, and promote long-term oral health.",
        ]}
        buttonText="Schedule Free Consultation"
        buttonAction={() => console.log("Clicked!")}
        imageSrc="/services/image-2.png"
        imageAlt="Facial Aesthetics"
        items={[
          "Whiter Teeth – Professional whitening for a brighter smile.",
          "Improved Alignment – Straighter, well-proportioned teeth.",
          "Enhanced Tooth Shape – Customized veneers and bonding.",
          "Boosted Confidence – Smile with assurance.",
          "Minimally Invasive – Advanced, gentle procedures.",
          "Long-Lasting Results – Durable, natural aesthetics.",
        ]}
      />
      {/* Parallax Images Section*/}
      {/* <div className="my-[80px] md:my-[250px]">
        <TextAndDescription
          title="Your Health Journey Starts Here"
          description="From aesthetic transformations to life-changing medical treatments, we offer specialized healthcare solutions designed for you. Our advanced technology, expert specialists, and personalized approach ensure exceptional results, making your health and comfort our top priority."
        />
        <div className="mt-[40px] md:mt-[60px]  space-y-[10px]">
          <ScrollingText direction="left" />
          <ScrollingText direction="right" />
        </div>
      </div> */}
      {/* Our Services */}
      <OurServices
        title="Comprehensive Services"
        description="Our aesthetic dentistry solutions focus on enhancing smile aesthetics through advanced procedures like teeth whitening, veneers, bonding, and alignment correction. With cutting-edge techniques, we create beautifully natural, confident smiles that last."
        ourServicesData={[
          {
            rotate: 12,
            service: "aesthetic dentistry",
            url: "https://placehold.co/341x511",
          },
          {
            rotate: -12,
            service: "dental implants",
            url: "https://placehold.co/341x511",
          },
          {
            rotate: 12,
            service: "surgical prosedures",
            url: "https://placehold.co/341x511",
          },
          {
            rotate: -12,
            service: "restorative treatments",
            url: "https://placehold.co/341x511",
          },
          {
            rotate: 12,
            service: "periodontics",
            url: "https://placehold.co/341x511",
          },
          {
            rotate: -12,
            service: "Orthodontics",
            url: "https://placehold.co/341x511",
          },
          {
            rotate: 12,
            service: "Dental therapy",
            url: "https://placehold.co/341x511",
          },
          // {
          //   rotate: -12,
          //   service: "Chain Implant",
          //   url: "https://placehold.co/341x511",
          // },
          // {
          //   rotate: 12,
          //   service: "Facial Fat Grafthing",
          //   url: "https://placehold.co/341x511",
          // },
          // {
          //   rotate: -12,
          //   service: "Buccal Fat Removal",
          //   url: "https://placehold.co/341x511",
          // },
          // {
          //   rotate: 12,
          //   service: "Double chin liposuction ",
          //   url: "https://placehold.co/341x511",
          // },
          // {
          //   rotate: -12,
          //   service: "Lip lift",
          //   url: "https://placehold.co/341x511",
          // },
        ]}
      />

      <ScrollTimeline
        title="When will I see results?"
        timelineData={[
          {
            heading: "Week 1",
            // title: "Choose your treatment",
            description:
              "Initial improvements in tooth color and shape.",
          },
          {
            heading: "Week 2-3",
            // title: "Get a Free Quote",
            description: "Adjustments settle, noticeable enhancements in symmetry.",
          },
          {
            heading: "Week 4-6",
            // title: "Plan Your Stay",
            description: "Improved smile aesthetics, natural-looking results.",
          },
        ]}
      />
      {/* Partners */}
      {/* <Partners /> */}
      <ImageComparisonSlider
        before="https://placehold.co/1312x642?text=Hello+World"
        after="https://placehold.co/1312x642?text=Hiiiii+World"
      />
      <HorizontalStories
        storiesData={[
          {
            name: "Frankie",
            role: "New Parents",
            des: "Lorem ipsum dolor sit amet consectetur. Neque curabitur tellus et malesuada erat.",
            image: "https://placehold.co/383x330",
            type: "story",
          },
          {
            image: "https://placehold.co/383x330",
            type: "image",
          },
          {
            name: "John Doe",
            role: "New Parents",
            des: "Lorem ipsum dolor sit amet consectetur. Neque curabitur tellus et malesuada erat.",
            image: "https://placehold.co/383x330",
            type: "story",
          },
          {
            image: "https://placehold.co/383x330",
            type: "image",
          },
        ]}
      />
      <ConsultationForm />
      {/* <ScrollTimeline
        title="When Will I See Results?"
        timelineData={timelineData}
      /> */}
      {/* <WhatWeOffer
        badge="What we offer"
        title="REFINE, REJUVENATE & RESTORE"
        description="Our expert facial aesthetic treatments include contouring, skin tightening, and volume restoration, delivering natural, youthful, and long-lasting results with precision."
        buttonText="Schedule Free Consultation"
        buttonLink="#"
      />

      <ConsultationForm />

      <Breadcrumb
        title="FACIAL AESTHETICS"
        description="Enhance facial harmony, symmetry, and youthful appearance with advanced aesthetic procedures designed to refine features, restore volume, and improve skin texture."
      /> */}
    </>
  );
};

export default Dentistry;
