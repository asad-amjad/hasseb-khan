export default function HealthExperienceSection() {
    return (
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-4">
            <span className="inline-block bg-gray-200 text-gray-700 text-sm px-4 py-1 rounded-full">
              Welcome to logopipsum
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              A GREAT HEALTH EXPERIENCE AWAITS YOU
            </h2>


  
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur. Pellentesque pharetra integer eu nulla. 
              Ullamcorper ut cursus feugiat suscipit in. Morbi vitae lectus pellentesque luctus cras feugiat.
            </p>
            <p className="text-gray-600">
              Faucibus cras quam cras pharetra facilisis. Nisl imperdiet massa in eget viverra turpis viverra. 
              Ut ornare ullamcorper amet aliquam metus tristique ut aenean at.
            </p>
  
            <button className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 transition-colors duration-300">
              Know More About The Clinic
            </button>
          </div>
  
          {/* Right Image */}
          <div className="relative flex justify-center">
            <img
              src="/health-section.png"
              alt="Clinic Interior"
              className="rounded-lg shadow-lg w-2/4 max-w-md object-cover"
            />
            <span className="absolute -z-10 text-gray-200 text-4xl font-bold right-2 bottom-2">
              PRIMEMED ISTANBUL
            </span>
          </div>
        </div>
      </section>
    );
  }
  