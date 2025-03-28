import { useEffect, useState } from "react";

export default function ParallaxSections() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.5);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Section 1 */}
      <div
        className="relative h-screen flex flex-col items-center justify-center text-center"
        style={{ background: "linear-gradient(to right, #FBCFC8, #EFA59A)" }}
      >
        <h2 className="text-4xl font-bold text-gray-900">Hair Transplant</h2>
        <p className="text-lg text-gray-700 mt-2">
          Restore Your Hair & Confidence!
        </p>
        <button className="mt-6 bg-red-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-600 transition">
          Book Free Consultation
        </button>
      </div>

      {/* Section 2 */}
      <div
        className="relative h-screen flex flex-col items-center justify-center text-center"
        style={{ background: "linear-gradient(to right, #FBEEDD, #E8C79C)" }}
      >
        <h2 className="text-4xl font-bold text-gray-900">Skin Care</h2>
        <p className="text-lg text-gray-700 mt-2">
          Achieve Flawless & Glowing Skin.
        </p>
        <button className="mt-6 bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600 transition">
          Get a Free Consultation
        </button>
      </div>

      {/* Section 3 */}
      <div
        className="relative h-screen flex flex-col items-center justify-center text-center"
        style={{ background: "linear-gradient(to right, #F2F7FF, #9DB8E2)" }}
      >
        <h2 className="text-4xl font-bold text-gray-900">Dental Care</h2>
        <p className="text-lg text-gray-700 mt-2">
          A Perfect Smile Starts Here.
        </p>
        <button className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition">
          Schedule an Appointment
        </button>
      </div>
    </div>
  );
}
