import React from "react";
import imageAssets from "../../assets";

const ContactLeft = () => {
  return (
    <div 
      className="w-full lg:w-[40%] p-8 flex flex-col relative overflow-hidden text-white bg-newExpertiseGradient"
    >
      <div className="relative z-10 flex flex-col h-full">
        {/* Heading */}
        <h3 className="font-heading font-6 text-3xl mb-6 leading-tight">
          Let's Build Something smart together
        </h3>
        
        <h4 className="font-heading font-6 text-lg mb-4 text-white/90">
          Contact Information
        </h4>

        {/* Contact Info */}
        <div className="space-y-4 font-body text-sm flex-grow">
          {/* Email */}
          <div className="flex items-center gap-4 bg-tagClr rounded-full p-2 pr-6">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0">
              <img src={imageAssets.emailIcon} alt="Email" className="w-9 h-9 object-contain" />
            </div>
            <div className="flex flex-col text-textDefaultClr">
              <p className="opacity-60 text-xs mb-0.5">Email</p>
              <p className="font-5 text-base">contact@resonent.com</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4 bg-tagClr rounded-full p-2 pr-6">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0">
              <img src={imageAssets.callIconPng} alt="Phone" className="w-9 h-9 object-contain" />
            </div>
            <div className="flex flex-col text-textDefaultClr">
              <p className="opacity-60 text-xs mb-0.5">Phone</p>
              <p className="font-5 text-base">+91 98765 43210</p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-center gap-4 bg-tagClr rounded-3xl p-2 pr-6">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0">
              <img src={imageAssets.locationIcon} alt="Address" className="w-9 h-9 object-contain" />
            </div>
            <div className="flex flex-col text-textDefaultClr">
              <p className="opacity-60 text-xs mb-0.5">Address</p>
              <p className="font-5 text-base leading-snug">
                123, Tech Park, Innovation Street,<br />
                Ahmedabad, Gujarat, India
              </p>
            </div>
          </div>
        </div>

        <h4 className="font-heading font-6 text-lg mb-4 mt-2 text-white/90">
          Map View
        </h4>

        {/* Map */}
        <div className="h-40 w-full rounded-2xl overflow-hidden bg-white/5 border border-white/10 shadow-inner">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.958638259928!2d72.5!3d23.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAwJzAwLjAiTiA3MsKwMzAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "grayscale(0.2) contrast(1.1)" }}
            allowFullScreen=""
            loading="lazy"
            title="map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;