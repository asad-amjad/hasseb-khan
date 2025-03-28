import { useState } from "react";
import Breadcrumb from "../components/Breadcrumbs/Breadcrumb";
// import { FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa";

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    service: "",
    communication: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="w-full">
      {/* Header */}
      {/* <header className="bg-gray-100 py-6 px-4 text-center">
        <h1 className="text-3xl font-bold">SCHEDULE FREE CONSULTATION</h1>
        <p className="text-gray-600 mt-2">
          Our acknowledged surgeons and aestheticians provide advanced surgical
          solutions in Turkey.
        </p>
      </header> */}

      <Breadcrumb
        title="RHINOPLASTY"
        description="Our acknowledged surgeons and aestheticians provide advanced and innovative techniques for both surgical and non-surgical solutions in Turkey."
      />

      {/* Contact Form Section */}
      <section className="max-w-4xl mx-auto my-10 p-6">
        <div className="text-center">
          <h2>UNLOCK YOUR PERSONALIZED CONSULTATION TODAY!</h2>

          <p className="body-2">
            Down to earth through instruction in yoga and mindfulness for the
            benefits of all bodies
          </p>
        </div>

        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="border p-3 w-full rounded-md"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="border p-3 w-full rounded-md"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="border p-3 w-full rounded-md"
            />
            <input
              type="text"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              className="border p-3 w-full rounded-md"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="border p-3 w-full rounded-md"
            >
              <option value="">Please Select Service</option>
              <option value="gastric">Gastric Sleeves</option>
              <option value="rhinoplasty">Rhinoplasty</option>
              <option value="tummy-tuck">Tummy Tuck (BBL)</option>
            </select>
            <select
              name="communication"
              value={formData.communication}
              onChange={handleChange}
              className="border p-3 w-full rounded-md"
            >
              <option value="">Select Communication Preference</option>
              <option value="email">Email</option>
              <option value="phone">Phone Call</option>
              <option value="whatsapp">WhatsApp</option>
            </select>
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="border p-3 w-full rounded-md"
          />
          <button className="bg-red-500 text-white py-3 px-6 rounded-md w-full hover:bg-red-600 transition">
            Schedule Free Consultation
          </button>
        </form>
      </section>

      {/* Contact Icons */}
      <div className="fixed right-4 bottom-10 space-y-3">
        <button className="bg-green-500 text-white p-3 rounded-full shadow-lg">
          {/* <FaWhatsapp size={24} /> */}w
        </button>
        <button className="bg-red-500 text-white p-3 rounded-full shadow-lg">
          {/* <FaPhone size={24} /> */}w
        </button>
        <button className="bg-orange-500 text-white p-3 rounded-full shadow-lg">
          {/* <FaEnvelope size={24} /> */}w
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-6 mt-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Services</h3>
            <ul>
              <li>Gastric Sleeves</li>
              <li>Rhinoplasty</li>
              <li>Tummy Tuck (BBL)</li>
              <li>Hair Transplant</li>
              <li>Oncology</li>
              <li>Orthopedics</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Contact</h3>
            <p>(+971) 52 123 4567</p>
            <p>info@domainname.com</p>
            <p>123 Street, Dubai, UAE</p>
          </div>
        </div>
        <p className="text-center mt-4 text-sm">© 2024. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
