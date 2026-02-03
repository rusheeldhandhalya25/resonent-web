import imageAssets from "../../assets";
import ContactForm from "../../components/ContactForm";

const ContactUs = () => {
  const style = {
    backgroundColor: "#002556",
    backgroundImage: `
      linear-gradient(
        240.05deg,
        rgba(4, 47, 105, 0.35) 0.05%,
        rgba(53, 144, 242, 0.35) 21.74%,
        rgba(53, 144, 242, 0.35) 73.07%,
        rgba(4, 47, 105, 0.35) 101.64%
      )
    `,
  };

  return (
    <div className="relative mt-20 mb-20">
      {/* SVG — ONLY OUTSIDE CARD */}
      <img
        src={imageAssets.Home_Contactus}
        alt=""
        className="
          absolute
          bottom-0
          left-1/2
          -translate-x-1/2
          w-[140%]
          max-w-none
          pointer-events-none
          z-0
        "
      />

      {/* ACTUAL CARD */}
      <section
        style={style}
        className="
          relative
          z-10
          px-4 sm:px-6 py-8 md:py-12 lg:py-16
          mx-4 sm:mx-8 md:mx-12 lg:mx-20
          rounded-xl
          overflow-hidden
        "
      >
        <div className="font-heading font-6 text-3xl md:text-4xl text-center mt-7 mb-10">
          Contact Us
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <img
            src={imageAssets.ContactImg}
            alt="contact image"
            className="rounded-2xl h-full w-full"
          />

          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
