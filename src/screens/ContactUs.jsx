import React from "react";

import PageHero from "../components/hero-section/PageHero";
import TextWithMap from "../components/text-with-map/TextWithMap";
import ImageWithForm from "../components/image-with-form/ImageWithForm";
import Image1 from "../assets/contact-us/image-1.jpeg";

const ContactUs = () => {
  return (
    <>
      <PageHero
        title="Contact Us"
        description="Our acknowledged surgeons and aestheticians provide advanced and innovative techniques for both surgical and non-surgical solutions in Turkey."
      />

      <TextWithMap
        badge="Talk With Us!"
        title="Contact Information"
        // descriptions={[
        //   "Down to earth through instruction in yoga and mindfulness for the benefits of all bodies",
        //   "(+971) 52 123 4567"
        //   // "We believe that healthcare should be both effective and stress-free. That’s why we provide personalized treatment plans, cutting-edge technology, and top-tier medical expertise in a warm and welcoming environment. From initial consultation to post-treatment care, our team is dedicated to delivering a smooth experience with comprehensive support at every stage.",
        //   // "Beyond exceptional medical care, we offer full-fledged assistance, including airport transfers, accommodation arrangements, and personalized concierge services. Our goal is to make your health journey effortless, ensuring that you can focus on your recovery while enjoying the beauty and cultural richness of Turkey.",
        //   // "With Primed, you’re not just choosing healthcare—you’re choosing quality, comfort, and a holistic approach to well-being. Let us guide you to a healthier, happier version of yourself.",
        // ]}
        // buttonText="Schedule Free Consultation"
        // buttonAction={() => console.log("Clicked!")}
        imageSrc={Image1}
        imageAlt="Facial Aesthetics"
      />

      <ImageWithForm />
    </>
  );
};

export default ContactUs;
