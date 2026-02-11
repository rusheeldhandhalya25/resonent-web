import React, { useState } from "react";
import ContactPopup from "../pages/Career/ContactPopup.jsx";

function OurProduct() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="bg-backgroundClr min-h-screen flex flex-col items-center justify-center gap-4">
     
      <button 
        onClick={() => setIsContactOpen(true)}
        className="px-6 py-3 bg-primaryDefaultClr text-white rounded-full font-semibold hover:opacity-90 transition-opacity"
      >
        Open Contact Popup
      </button>

      <ContactPopup isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}

export default OurProduct;
