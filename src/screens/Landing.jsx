import React from 'react';
import Background from '../components/hero-section/Background';
import Header from '../components/hero-section/Header';
import HeroSection from '../components/hero-section/HeroSection';
import FloatingChat from '../components/hero-section/FloatingChat';
import HealthExperienceSection from '../components/health-experience-section/HealthExperienceSection';
import ParallaxHero from '../components/parallax-hero/ParallaxHero';

const Landing = () => {
  return (
    <div className="relative h-screen bg-gradient-to-r from-yellow-100 to-pink-100">
    <Background />
    <Header />
    <HeroSection />
    <FloatingChat />

    <HealthExperienceSection/>
    {/* <ParallaxHero/> */}
  </div>
  );
};

export default Landing;