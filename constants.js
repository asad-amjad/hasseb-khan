import story1 from "./src/assets/common/story-1.jpg";
import story2 from "./src/assets/common/story-2.jpg";
import story3 from "./src/assets/common/story-3.jpg";
import genitalImage from "./src/assets/genital-aesthetic/intro.png";
import bodyAestheticsImage from "./src/assets/body-aesthetics/intro.png";
import breastAestheticsImage from "./src/assets/breast-aesthetics/intro.png";
import facialAestheticsImage from "./src/assets/facial-aesthetics/intro.png";
import dentalImage from "./src/assets/dental/intro.png";

export const menuLinks = [
  { label: "About Us", href: "/about-us" },
  // { label: "Aesthetics", href: "/aesthetics" },
  { label: "Body Aesthetics", href: "/body-aesthetics" },
  { label: "Genital Aesthetics", href: "/genital-aesthetics" },
  { label: "Breast Aesthetics", href: "/breast-aesthetics" },
  { label: "Facial Aesthetics", href: "/facial-aesthetics" },
  { label: "Hair Transplant", href: "/hair-transplant" },
  { label: "Dentistry", href: "/dentistry" },
  { label: "Contact Us", href: "/contact-us" },
];

export const storiesData = [
  {
    name: "Ayze",
    role: "Eyebrow Lift",
    des: "I was nervous at first, but the PrimeMed team made me feel completely at ease. The eyebrow lift gave me a natural, refreshed look — exactly what I hoped for. The clinic was clean, modern, and the staff were so warm and professional. It didn’t feel like a procedure — it felt like self-care.",
    image: story1,
    type: "story",
  },
  {
    image: story1,
    type: "image",
  },
  {
    name: "Bernard ",
    role: "Teeth Alignment (Spain)",
    des: "I flew in from Spain after reading reviews, and it was 100% worth it.The process was smooth, professional, and the results exceeded my expectations. My teeth are perfectly aligned now, and I can finally smile without hesitation.The team kept me informed and comfortable every step of the way.",
    image: story2,
    type: "story",
  },
  {
    image: story2,
    type: "image",
  },
  {
    name: "Berkay  ",
    role: " Dental Treatment (Turkey)",
    des: "I had struggled with my teeth for years before coming to PrimeMed. They gave me not only a new smile but also a whole new level of confidence. Everything from consultation to treatment was smooth and transparent. I felt genuinely cared for — not just treated like a number.",
    image: story3,
    type: "story",
  },
  {
    image: story3,
    type: "image",
  },
];

export const services = [
  {
    rotate: 12,
    service: "Dentistry",
    imageSrc: dentalImage,
    url: "/dentistry",
  },
  {
    rotate: -12,
    service: "Facial aesthetics",
    imageSrc: facialAestheticsImage,
    url: "/facial-aesthetics",
  },
  {
    rotate: 12,
    service: "Breast aesthetics",
    imageSrc: breastAestheticsImage,
    url: "/breast-aesthetics",
  },
  {
    rotate: -12,
    service: "Body aesthetics",
    imageSrc: bodyAestheticsImage,
    url: "/body-aesthetics",
  },
  {
    rotate: 12,
    service: "Genital aesthetics",
    imageSrc: genitalImage,
    url: "/genital-aesthetics",
  },
  {
    rotate: 12,
    service: "Hair Transplant",
    imageSrc: genitalImage,
    url: "/hair-transplant",
  },
];
