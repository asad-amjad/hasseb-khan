import story1 from "./src/assets/common/story-1.jpeg";
import story2 from "./src/assets/common/story-2.jpeg";
import genitalImage from "./src/assets/genital-aesthetic/intro.png";
import bodyAestheticsImage from "./src/assets/body-aesthetics/intro.png";
import breastAestheticsImage from "./src/assets/breast-aesthetics/intro.png";
import facialAestheticsImage from "./src/assets/facial-aesthetics/intro.png";
import dentalImage from "./src/assets/dental/intro.png";

export const menuLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "Body Aesthetics", href: "/body-aesthetics" },
  { label: "Genital Aesthetics", href: "/genital-aesthetic" },
  { label: "Breast Aesthetics", href: "/breast-aesthetics" },
  { label: "Facial Aesthetics", href: "/facial-aesthetics" },
  { label: "Dentistry", href: "/dentistry" },
  { label: "Contact Us", href: "/contact-us" },
];

export const storiesData = [
  {
    name: "Frankie",
    role: "New Parents",
    des: "Lorem ipsum dolor sit amet consectetur. Neque curabitur tellus id malesuada erat. Vel a netus ultrices et interdum in. Lorem mauris ultrices enim ac diam. Sodales eget consequat mi congue nunc et molestie phasellus pharetra. Et cursus non quis at.",
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
    des: "Lorem ipsum dolor sit amet consectetur. Neque curabitur tellus id malesuada erat. Vel a netus ultrices et interdum in. Lorem mauris ultrices enim ac diam. Sodales eget consequat mi congue nunc et molestie phasellus pharetra. Et cursus non quis at.",
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
];
