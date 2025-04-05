// TODO:
import { motion } from "framer-motion";

const scrollingTexts = [
  "✈️ Fly to Istanbul, Return with Confidence!",
  "💇‍♂️ Get Your Hair Back with DHI & Sapphire FUE",
  "😁 Smile Makeover in Just 5 Days – Book Now!",
  "🦷 Dental Implants & Hollywood Smile Packages",
  "👃 Expert Rhinoplasty – Natural Results, Affordable Price",
  "🏥 State-of-the-Art Clinics & Top Surgeons",
  "📦 All-Inclusive Medical Travel Packages",
  "🔒 100% Confidential – Your Privacy, Our Priority",
  "🧳 Free VIP Transfer & Hotel Stay Included",
  "✅ FDA-Approved Techniques & Safe Practices",
  "⏳ Limited Time Offer – Book Your Consultation Today!",
  "💬 Multilingual Support for International Patients",
  "🌍 Join Thousands Who Chose PrimeMed Istanbul",
  "📍 Located in the Heart of Istanbul's Medical Hub",
  "💡 Your Beauty, Our Expertise – PrimeMed Istanbul"
];


const ScrollingText = ({ direction = "left" }) => {
  return (
    <div className="h-[55px] py-[18px] px-[10px] bg-[#E55D48] text-[#F4F6F9] justify-center items-center overflow-hidden">
      <motion.div
        className="flex gap-[100px] w-max"
        animate={{
          x: direction === "left" ? ["100%", "-100%"] : ["-100%", "100%"], // Moves in opposite directions
        }}
        transition={{
          duration: 150,
          ease: "linear",
          repeat: Infinity,
          repeatDelay: 0,
        }}
      >
        {scrollingTexts.map((text, index) => (
          <h6 key={index} className="w-fit">
            {text}
          </h6>
        ))}
      </motion.div>
    </div>
  );
};


export default ScrollingText;
