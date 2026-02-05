import imageAssets from "../../assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-backgroundClr font-body text-textDefaultClr overflow-hidden
                       pt-10 pb-16 sm:pb-20 lg:pb-28 px-4 sm:px-8 lg:px-24">

      {/* BACKGROUND SVGs */}
      <img
        src={imageAssets.Footer_line1}
        alt=""
        className="absolute bottom-[55%] sm:bottom-[50%] lg:bottom-[45%]
                   right-[-10%] w-[180%] sm:w-[160%] lg:w-[110%]
                   max-w-none opacity-90 z-0"
      />

      <img
        src={imageAssets.Footer_line2}
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
          <img src={imageAssets.logo} alt="logo" className="w-[150px]" />
        </div>

        <img src={imageAssets.Footer}
            alt=""
            className="hidden lg:block w-[3px] h-[140px] opacity-60 mx-6"
          />

        {/* LINKS */}
        <div className="flex items-start justify-center">

          {/* SECTION 1 */}
          <div className="flex flex-col gap-2 text-16 items-start">
            {["Home", "About Us", "Blog", "Courses", "Consulting"].map((t, i) => (
              <Link key={i} to="/" className="hover:text-primaryDefaultClr transition">
                {t}
              </Link>
            ))}
          </div>

          {/* DIVIDER */}
          <img
            src={imageAssets.Footer}
            alt=""
            className="
              mx-4 sm:mx-6 lg:mx-8
              w-[3px] h-[140px]
              opacity-60
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

        <img src={imageAssets.Footer}
          alt=""
          className="hidden lg:block w-[3px] h-[140px] opacity-60 mx-6"
        />

        {/* CONTACT US (single, responsive) */}
        <div className="flex flex-col gap-4 items-center lg:items-start">
          <span className="text-18 font-6">Contact Us</span>

          <div className="flex justify-center lg:justify-start gap-3">
            {[
              { href: "https://instagram.com", icon: imageAssets.instagramicon },
              { href: "https://twitter.com", icon: imageAssets.twittericon },
              { href: "https://www.behance.net", icon: imageAssets.behanceicon },
              { href: "https://dribbble.com", icon: imageAssets.dribbbleicon },
              { href: "tel:+919876543210", icon: imageAssets.callicon },
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
