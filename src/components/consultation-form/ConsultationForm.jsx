import React from "react";
import Button from "../button/Button";

const ConsultationForm = () => {
  return (
    <div className="flex justify-center items-center py-[100px] px-[16px] md:px-0">
      <div className="md:w-[812px]">
        <div className="md:mt-[60px]">
          <div className="flex justify-start md:justify-center w-full">
            <p className="body-2 tag">Contact Us</p>
          </div>

          <div className=" my-[30px] md:my-[60px] md:text-center">
            <h2>Unlock Your Personalized Consultation Today!</h2>
            <p className="body-2 w-full">
            Down to earth through instruction in yoga and mindfulness for the benefits of all bodies
            </p>
          </div>
        </div>

        <form className="space-y-[16px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
            <input
              type="text"
              placeholder="First Name"
              className="input-field"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="input-field"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
            <input
              type="email"
              placeholder="Email Address"
              className="input-field"
            />

            <div className="flex items-center gap-[16px]">
              <select className="w-[128px]">
                <option> +971</option>
              </select>
              <input
                type="text"
                placeholder="Mobile Number"
                className="input-field"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
            <select>
              <option>Please Select Service</option>
            </select>
            <select>
              <option>Please Select Communication Preference</option>
            </select>
          </div>

          <textarea
            placeholder="Your Message"
            className="input-field min-h-[150px] p-[14px] md:min-h-[124px] w-full"
          ></textarea>

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
