import imageAssets from "../../assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="relative bg-backgroundClr font-body text-textDefaultClr overflow-hidden
                       pt-10 pb-16 sm:pb-16 lg:pb-20 px-4 sm:px-8 lg:px-24"
    >
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
      <div
        className="relative z-10
                      flex flex-col lg:flex-row
                      items-center justify-center lg:justify-between
                      gap-10 lg:gap-0 w-full"
      >
        {/* LOGO (desktop only) */}
        <div className="hidden lg:flex shrink-0 items-center justify-center">
          <img src={imageAssets.footerLogo} alt="logo" className="w-40" />
        </div>

        <img
          src={imageAssets.footer}
          alt=""
          className="hidden lg:block w-1 h-40 opacity-70 mx-10"
        />

        {/* LINKS GROUP (Mobile: Row, Desktop: Contents/Flat) */}
        <div className="flex flex-row items-center justify-center lg:contents">
          {/* SECTION 1 */}
          <div className="flex flex-col gap-4 text-base items-center justify-center">
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about" },
              { name: "Services", path: "/services" },
              { name: "Our Products", path: "/products" },
            ].map((item, i) => (
              <Link
                key={i}
                to={item.path}
                className="hover:text-primaryDefaultClr transition text-center"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* DIVIDER (Visible on both) */}
          <img
            src={imageAssets.footer}
            alt=""
            className="
              mx-6 sm:mx-10 lg:mx-10
              w-1 h-40
              opacity-70
            "
          />

          {/* SECTION 2 */}
          <div className="flex flex-col gap-4 text-base items-center justify-center">
            {[
              { name: "Client’s Projects", path: "/projects" },
              { name: "Careers", path: "/career" },
              { name: "Blogs", path: "/blogs" },
            ].map((item, i) => (
              <Link
                key={i}
                to={item.path}
                className="hover:text-primaryDefaultClr transition text-center"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <img
          src={imageAssets.footer}
          alt=""
          className="hidden lg:block w-1 h-40 opacity-70 mx-10"
        />

        {/* CONTACT US */}
        <div className="flex flex-col gap-6 items-center justify-center">
          <span className="text-xl font-semibold text-center">Contact Us</span>

          <div className="flex flex-row flex-nowrap justify-center gap-3">
            {[
              {
                href: "https://instagram.com",
                icon: imageAssets.instagramIcon,
              },
              { href: "https://twitter.com", icon: imageAssets.twitterIcon },
              {
                href: "https://www.behance.net",
                icon: imageAssets.behanceIcon,
              },
              { href: "https://dribbble.com", icon: imageAssets.dribbbleIcon },
              { href: "tel:+919876543210", icon: imageAssets.callIcon },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10
                           bg-cardClr border border-lightOutlineClr
                           rounded-2xl flex items-center justify-center
                           hover:bg-primaryDefaultClr/10 transition shrink-0"
              >
                <img src={item.icon} className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
