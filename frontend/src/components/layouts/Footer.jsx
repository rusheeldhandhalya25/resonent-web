import imageAssets from "../../assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-backgroundClr font-body text-textDefaultClr py-12 pb-20 px-4 sm:px-6 lg:px-24">
      <div
        className="
          flex
          flex-col
          lg:flex-row
          items-center
          justify-between
          gap-10
          text-center
          lg:text-left
        "
      >
        {/* LOGO */}
        <div className="flex justify-center lg:justify-start">
          <img
            src={imageAssets.logo}
            alt="resonent logo"
            className="w-[120px] sm:w-[135px] lg:w-[150px] h-auto"
          />
        </div>

        {/* DIVIDER */}
        <img
          src={imageAssets.Footer}
          alt=""
          className="w-full h-[2px] lg:w-[3px] lg:h-[110px] opacity-70"
        />

        {/* LINKS 1 */}
        <div className="flex flex-col gap-1.5 items-center lg:items-start text-16">
          {["Home", "About Us", "Blog", "Courses", "Consulting"].map((text, i) => (
            <Link
              key={i}
              to="/"
              className="hover:text-primaryDefaultClr transition-colors duration-200"
            >
              {text}
            </Link>
          ))}
        </div>

        {/* DIVIDER */}
        <img
          src={imageAssets.Footer}
          alt=""
          className="w-full h-[2px] lg:w-[3px] lg:h-[110px] opacity-70"
        />

        {/* LINKS 2 */}
        <div className="flex flex-col gap-1.5 items-center lg:items-start text-16">
          {["Home", "About Us", "Blog", "Courses", "Consulting"].map((text, i) => (
            <Link
              key={i}
              to="/"
              className="hover:text-primaryDefaultClr transition-colors duration-200"
            >
              {text}
            </Link>
          ))}
        </div>

        {/* DIVIDER */}
        <img
          src={imageAssets.Footer}
          alt=""
          className="w-full h-[2px] lg:w-[3px] lg:h-[110px] opacity-70"
        />

        {/* CONTACT */}
        <div className="flex flex-col gap-3 items-center lg:items-start">
          <span className="text-18 font-6">Contact Us</span>

          <div className="flex gap-3 flex-nowrap justify-center lg:justify-start">
            {[
              { href: "https://instagram.com", icon: imageAssets.instagramicon, alt: "Instagram" },
              { href: "https://twitter.com", icon: imageAssets.twittericon, alt: "Twitter" },
              { href: "https://www.behance.net", icon: imageAssets.behanceicon, alt: "Behance" },
              { href: "https://dribbble.com", icon: imageAssets.dribbbleicon, alt: "Dribbble" },
              { href: "tel:+919876543210", icon: imageAssets.callicon, alt: "Call" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="
                  h-[2.3rem]
                  w-[2.3rem]
                  bg-cardClr
                  border-[2px]
                  border-lightOutlineClr
                  rounded-lg
                  flex
                  items-center
                  justify-center
                  transition-all
                  duration-200
                  hover:border-primaryDefaultClr/10
                  hover:bg-primaryDefaultClr/10
                  hover:scale-105
                "
              >
                <img
                  src={item.icon}
                  alt={item.alt}
                  className="w-[1.1rem] h-[1.1rem]"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
