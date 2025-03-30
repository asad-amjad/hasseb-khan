import React from "react";

import PageHero from "../components/hero-section/PageHero";
import OurServices from "../components/our-services/OurServices";
import OfferSection from "../components/offer-section/OfferSection";
import TextWithImage from "../components/text-with-image/TextWithImage";
import ScrollTimeline from "../components/scroll-timeline/ScrollTimeline";
import ConsultationForm from "../components/consultation-form/ConsultationForm";
import HorizontalStories from "../components/horizontal-stories/HorizontalStories";
import ImageComparisonSlider from "../components/image-comparison-slider/ImageComparisonSlider";
import Image1 from "../assets/about-us/image-1.jpeg";

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
        imageSrc={
          "https://s3-alpha-sig.figma.com/img/63b0/cddb/39e84a3ff159180a0e5ea0a7dd306549?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HqLHQiDpW3S26MTAyrHDUIxkZUAf77Je3MeefctbQQEM07liAvJTMTJCz1QZDAI~GSLgYJBxr0MT8tJEBXNuDs2G13eAflNAVxITuImxxwxP0yEZmU1aR0qGrBefC5HZaTZyHv4KXgc-dkRSwH2exEAwGIwJ9KbQku2epU0PnfPcsHl7HKcGjcciBWg-Bwl3PPTtXSKzvOPNOx5CNaObSC9zUwRGKi0gcneplhJeIWBwB8GGH8G4dauVP051Mro-FGfu8Ro~UxbFl9LWnRI6UMdXoqnUzqe6ZlAQ~RoGRv4oFkfWUCzIhcSABN2WhaTFZQLLd1rw14bAAKv3me5uTg__"
        }
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
        imageSrc={Image1}
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
        ]}
      />

      <ScrollTimeline
        title="When will I see results?"
        timelineData={[
          {
            heading: "Week 1",
            // title: "",
            description: "Initial improvements in tooth color and shape.",
          },
          {
            heading: "Week 2-3",
            // title: "",
            description:
              "Adjustments settle, noticeable enhancements in symmetry.",
          },
          {
            heading: "Week 4-6",
            // title: "",
            description: "Improved smile aesthetics, natural-looking results.",
          },
        ]}
      />

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
    </>
  );
};

export default Dentistry;
