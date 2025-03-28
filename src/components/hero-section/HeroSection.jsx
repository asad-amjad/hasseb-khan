const HeroSection = () => {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">FEEL YOUR BEST</h1>
      <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">LOOK YOUR BEST</h2>
      <p className="text-lg text-white mb-8 max-w-2xl">
        Our acknowledged surgeons and aestheticians provide advanced and innovative techniques for
        both surgical and non-surgical solutions in Turkey.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6  transition-colors duration-300">
          Free Consultation
        </button>
        
        <button className="bg-secondary hover:bg-secondary-dark text-white font-bold py-3 px-6 transition-colors duration-300">
          Find Your Procedure
        </button>
      </div>
    </div>
  );
};

export default HeroSection;