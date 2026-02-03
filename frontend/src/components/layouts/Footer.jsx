import imageAssets from "../../assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-backgroundClr font-body text-textDefaultClr overflow-hidden
                       pt-10 pb-16 sm:pb-20 lg:pb-28 px-4 sm:px-6 lg:px-24">

      {/* SVG 1 */}
      <img
        src={imageAssets.Footer_line1}
        alt=""
        className="
          absolute
          bottom-[55%]
          sm:bottom-[50%]
          lg:bottom-[45%]
          right-[-10%]
          w-[180%]
          sm:w-[160%]
          lg:w-[110%]
          max-w-none
          opacity-90
          z-0
        "
      />

      {/* SVG 2 */}
      <img
        src={imageAssets.Footer_line2}
        alt=""
        className="
          absolute
          bottom-[25%]
          sm:bottom-[5%]
          lg:bottom-0
          right-[-5%]
          w-[180%]
          sm:w-[160%]
          lg:w-[110%]
          max-w-none
          opacity-100
          z-0
        "
      />

      <div
        className="
          relative z-10
          flex flex-col lg:flex-row
          items-center justify-between
          gap-6 sm:gap-8 lg:gap-10
          text-center lg:text-left
        "
      >
        {/* LOGO (desktop only) */}
        <div className="hidden lg:flex justify-start">
          <img
            src={imageAssets.logo}
            alt="resonent logo"
            className="w-[150px] h-auto"
          />
        </div>

        {/* DIVIDER */}
        <img
          src={imageAssets.Footer}
          alt=""
          className="w-full h-[1px] opacity-50
                     lg:w-[3px] lg:h-[110px]"
        />

        {/* LINKS 1 */}
        <div className="flex flex-col gap-1.5 items-center lg:items-start text-16">
          {["Home", "About Us", "Blog", "Courses", "Consulting"].map((text, i) => (
            <Link key={i} to="/" className="hover:text-primaryDefaultClr transition-colors">
              {text}
            </Link>
          ))}
        </div>

        {/* DIVIDER */}
        <img
          src={imageAssets.Footer}
          alt=""
          className="w-full h-[1px] opacity-50
                     lg:w-[3px] lg:h-[110px]"
        />

        {/* LINKS 2 */}
        <div className="flex flex-col gap-1.5 items-center lg:items-start text-16">
          {["Home", "About Us", "Blog", "Courses", "Consulting"].map((text, i) => (
            <Link key={i} to="/" className="hover:text-primaryDefaultClr transition-colors">
              {text}
            </Link>
          ))}
        </div>

        {/* DIVIDER */}
        <img
          src={imageAssets.Footer}
          alt=""
          className="w-full h-[1px] opacity-50
                     lg:w-[3px] lg:h-[110px]"
        />

        {/* CONTACT */}
        <div className="flex flex-col gap-3 items-center lg:items-start">
          <span className="text-18 font-6">Contact Us</span>

          <div className="flex gap-3 justify-center lg:justify-start">
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
                className="
                  h-[2.2rem] w-[2.2rem]
                  bg-cardClr border border-lightOutlineClr
                  rounded-lg flex items-center justify-center
                  transition hover:bg-primaryDefaultClr/10
                "
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
