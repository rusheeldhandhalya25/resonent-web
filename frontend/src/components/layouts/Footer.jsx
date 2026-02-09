import imageAssets from "../../assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-backgroundClr font-body text-textDefaultClr overflow-hidden
                       pt-10 pb-16 sm:pb-16 lg:pb-20 px-4 sm:px-8 lg:px-24">

      {/* BACKGROUND SVGs */}
      <img
        src={imageAssets.footerLine1}
        alt=""
        className="absolute bottom-[55%] sm:bottom-[50%] lg:bottom-[45%]
                   right-[-10%] w-[180%] sm:w-[160%] lg:w-[110%]
                   max-w-none opacity-90 z-0"
      />

      <img
        src={imageAssets.footerLine2}
        alt=""
        className="absolute bottom-[25%] sm:bottom-[5%] lg:bottom-0
                   right-[-5%] w-[180%] sm:w-[160%] lg:w-[110%]
                   max-w-none opacity-100 z-0"
      />

      {/* MAIN WRAPPER */}
      <div className="relative z-10
                      flex flex-col lg:flex-row
                      items-center justify-center lg:justify-between
                      gap-8">

        {/* LOGO (desktop only) */}
        <div className="hidden lg:block shrink-0">
          <img src={imageAssets.footerLogo} alt="logo" className="w-[150px]" />
        </div>

        <img src={imageAssets.footer}
            alt=""
            className="hidden lg:block w-[4px] h-[160px] opacity-70 mx-6"
          />

        {/* LINKS */}
        <div className="flex items-start justify-center">

          {/* SECTION 1 */}
          <div className="flex flex-col gap-2 text-16 items-start mx-auto">
            {["Home", "About Us", "Blog", "Courses", "Consulting"].map((t, i) => (
              <Link key={i} to="/" className="hover:text-primaryDefaultClr transition">
                {t}
              </Link>
            ))}
          </div>

          {/* DIVIDER */}
          <img
            src={imageAssets.footer}
            alt=""
            className="
              mx-4 sm:mx-6 lg:mx-20
              w-[4px] h-[160px]
              opacity-70
            "
          />

          {/* SECTION 2 */}
          <div className="flex flex-col gap-2 text-16 items-start">
            {["Home", "About Us", "Blog", "Courses", "Consulting"].map((t, i) => (
              <Link key={i} to="/" className="hover:text-primaryDefaultClr transition">
                {t}
              </Link>
            ))}
          </div>
        </div>

        <img src={imageAssets.footer}
          alt=""
          className="hidden lg:block w-[4px] h-[160px] opacity-70 mx-6"
        />

        {/* CONTACT US (single, responsive) */}
        <div className="flex flex-col gap-4 items-center jusify-center lg:items-start">
          <span className="text-18 font-6">Contact Us</span>

          <div className="flex justify-center lg:justify-start gap-3">
            {[
              { href: "https://instagram.com", icon: imageAssets.instagramIcon },
              { href: "https://twitter.com", icon: imageAssets.twitterIcon },
              { href: "https://www.behance.net", icon: imageAssets.behanceIcon },
              { href: "https://dribbble.com", icon: imageAssets.dribbbleIcon },
              { href: "tel:+919876543210", icon: imageAssets.callIcon },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="h-[2.2rem] w-[2.2rem]
                           bg-cardClr border border-lightOutlineClr
                           rounded-lg flex items-center justify-center
                           hover:bg-primaryDefaultClr/10 transition"
              >
                <img src={item.icon} className="w-[1.1rem] h-[1.1rem]" />
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
