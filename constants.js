import story1 from "./src/assets/common/story-1.jpeg";
import story2 from "./src/assets/common/story-2.jpeg";

export const menuLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "Body Aesthetics", href: "/body-aesthetics" },
  { label: "Genital Aesthetics", href: "/genital-aesthetics" },
  { label: "Breast Aesthetics", href: "/breast-aesthetics" },
  { label: "Facial Aesthetics", href: "/facial-aesthetics" },
  { label: "Dentistry", href: "/dentistry" },
  { label: "Contact Us", href: "/contact-us" },
];

export const storiesData = [
  {
    name: "Frankie",
    role: "New Parents",
    des: "Lorem ipsum dolor sit amet consectetur. Neque curabitur tellus et malesuada erat.",
    image: story1,
    type: "story",
  },
  {
    image: story1,
    type: "image",
  },
  {
    name: "John Doe",
    role: "New Parents",
    des: "Lorem ipsum dolor sit amet consectetur. Neque curabitur tellus et malesuada erat.",
    image: story2,
    type: "story",
  },
  {
    image: story2,
    type: "image",
  },
];

export const services = [
  {
    rotate: 12,
    service: "Dentistry",
    url: "https://placehold.co/341x511",
  },
  {
    rotate: -12,
    service: "Facial aesthetics",
    url: "https://placehold.co/341x511",
  },
  {
    rotate: 12,
    service: "Breast aesthetics",
    url: "https://placehold.co/341x511",
  },
  {
    rotate: -12,
    service: "Body aesthetics",
    url: "https://placehold.co/341x511",
  },
  {
    rotate: 12,
    service: "Genital aesthetics",
    url: "https://placehold.co/341x511",
  },
];
