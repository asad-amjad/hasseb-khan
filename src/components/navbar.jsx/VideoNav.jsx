import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import BannerVideo from "../../assets/Videos/BannerVideo.mp4";
import logoWhite from "../../assets/Logos/logo-white.png";
import logoBlack from "../../assets/Logos/logo-black.png";
import { menu } from "./menu";
import { Heading, Text } from "../ui";
import Button from "../button/Button";
import ButtonSecondary from "../button/ButtonSecondary";

export default function VideoNav() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <div className="relative h-[97vh] md:h-[95vh] w-full flex flex-col">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={BannerVideo} type="video/mp4" />
        </video>

        <header className="w-full flex items-center justify-between md:flex-col z-20 pt-[24px] px-4">
          {/* Mobile Logo (Hidden on Desktop) */}
          <img
            src={logoWhite}
            alt="Prime Med Mobile Logo"
            className="hidden md:block w-[270px]"
          />

          {/* Desktop Logo (Hidden on Mobile) */}
          <img
            src={logoBlack}
            alt="Prime Med Desktop Logo"
            className="w-[270px] md:hidden"
          />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenu(true)}
            aria-label="Open Menu"
            className="md:hidden text-white text-3xl"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>

          {/* Navigation (Only visible on Desktop) */}
          <nav className="hidden w-full md:flex md:justify-center gap-[60px] md:items-center md:gap-4 lg:gap-5 pt-[24px]">
            {menu.map(({ href, label }) => (
              <a key={href} href={href} className="text-[#FFFFFF]">
                <Text variant="body2">{label}</Text>
              </a>
            ))}
          </nav>
        </header>

        <section className="w-full max-w-[785px] px-[20px] md:px-0 mx-auto flex flex-col gap-2 text-center z-20 flex-grow justify-center items-center">
          <Heading as="h1" className="uppercase text-white">
            Transform Your Health, Elevate Your Life
          </Heading>

          <Text variant="body2" className="text-white">
            Experience world-class medical care with cutting-edge treatments,
            expert specialists, and seamless healthcare solutions tailored to
            your needs.
          </Text>

          <div className="flex flex-col gap-4 w-full md:flex-row md:justify-center mt-[60px]">
            <Button
              buttonText="Free Consultation"
              onClick={() => console.log("Clicked!")}
            />
            <ButtonSecondary
              buttonText="Find Your Procedure"
              onClick={() => console.log("Clicked!")}
            />
          </div>
        </section>
      </div>
    </>
  );
}
