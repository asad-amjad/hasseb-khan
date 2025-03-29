import React from "react";

import PageHero from "../components/hero-section/PageHero";
import ConsultationForm from "../components/consultation-form/ConsultationForm";

const ScheduleFreeConsultation = () => {
  return (
    <>
      <PageHero
        title="Schedule free Consultation"
        description="Our acknowledged surgeons and aestheticians provide advanced and innovative techniques for both surgical and non-surgical solutions in Turkey."
      />
      <ConsultationForm />
    </>
  );
};

export default ScheduleFreeConsultation;
