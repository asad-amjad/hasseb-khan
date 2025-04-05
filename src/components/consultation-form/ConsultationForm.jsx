import React from "react";
import Button from "../button/Button";
import { services } from "../../../constants";
// import { services } from "../../data/services"; // Update path as needed

const phoneCodes = [
  "+1", "+44", "+49", "+91", "+971", "+61", "+33", "+81", "+92", "+86"
];

const ConsultationForm = () => {
  return (
    <div className="flex justify-center items-center py-[80px] md:py-[150px] px-[16px] md:px-0">
      <div className="md:w-[812px]">
        {/* Heading */}
        <div className="flex justify-start md:justify-center w-full mb-[30px] md:mb-[40px]">
          <p className="body-2 tag">Contact Us</p>
        </div>

        <div className="md:text-center space-y-[10px]">
          <h2>Unlock Your Personalized Consultation Today!</h2>
          <p className="body-2 w-full">
            Down to earth through instruction in yoga and mindfulness for the benefits of all bodies
          </p>
        </div>

        {/* Form */}
        <form className="space-y-[16px] my-[30px] md:my-[40px]">
          {/* First & Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="input-field"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="input-field"
              required
            />
          </div>

          {/* Email & Mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="input-field"
              required
            />
            <div className="flex items-center gap-[16px]">
              <select className="input-field w-[128px]" name="phoneCode" required>
                {phoneCodes.map(code => (
                  <option key={code} value={code}>{code}</option>
                ))}
              </select>
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                className="input-field"
                required
              />
            </div>
          </div>

          {/* Services & Communication Preference */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
            <select name="service" className="input-field" required>
              <option value="">Please Select Service</option>
              {services.map(({ service }) => (
                <option key={service} value={service}>{service}</option>
              ))}
            </select>
            <select name="communicationPreference" className="input-field" required>
              <option value="">Please Select Communication Preference</option>
              <option value="call">Call</option>
              <option value="whatsapp">WhatsApp</option>
              <option value="email">Email</option>
            </select>
          </div>

          {/* Message */}
          <textarea
            name="message"
            placeholder="Your Message"
            className="input-field min-h-[150px] p-[14px] md:min-h-[124px] w-full"
          ></textarea>

          {/* Button */}
          <Button
            buttonText="Schedule Free Consultation"
            onClick={() => console.log("Clicked!")}
          />
        </form>
      </div>
    </div>
  );
};

export default ConsultationForm;
