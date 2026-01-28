import logo from "../../assets/images/footer_logo.png";
import instagramicon from "../../assets/images/instagram_icon.svg";
import twittericon from "../../assets/images/twitter_icon.svg";
import behanceicon from "../../assets/images/behance_icon.svg";
import dribbbleicon from "../../assets/images/dribble_icon.svg";
import callicon from "../../assets/images/call_icon.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="
        w-full
        bg-backgroundClr
        font-body text-textDefaultClr
        grid
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-4
        gap-10
        py-12
        px-4
        sm:px-6
        lg:px-24
        text-center
        md:text-left
      "
    >
      {/* LOGO */}
      <div className="flex justify-center md:justify-start">
        <img
          src={logo}
          alt="resonent logo"
          className="
            w-[140px]
            sm:w-[160px]
            lg:w-[190px]
            h-auto
          "
        />
      </div>

      {/* LINKS 1 */}
      <div className="flex flex-col gap-2 items-center md:items-start text-18">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/blogs">Blog</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/consulting">Consulting</Link>
      </div>

      {/* LINKS 2 */}
      <div className="flex flex-col gap-2 items-center md:items-start text-18">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/blogs">Blog</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/consulting">Consulting</Link>
      </div>

      {/* CONTACT */}
      <div className="flex flex-col gap-4 items-center md:items-start">
        <span className="text-20 font-6">Contact Us</span>

        <div className="flex gap-4 flex-nowrap justify-center md:justify-start">
          {[
            {
              href: "https://instagram.com",
              icon: instagramicon,
              alt: "Instagram",
            },
            { href: "https://twitter.com", icon: twittericon, alt: "Twitter" },
            {
              href: "https://www.behance.net",
              icon: behanceicon,
              alt: "Behance",
            },
            {
              href: "https://dribbble.com",
              icon: dribbbleicon,
              alt: "Dribbble",
            },
            { href: "tel:+919876543210", icon: callicon, alt: "Call" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="
                h-[2.8rem]
                w-[2.8rem]
                sm:h-[3rem]
                sm:w-[3rem]
                bg-tagClr
                border-[3px]
                border-lightOutlineClr
                rounded-2xl
                flex
                items-center
                justify-center
                flex-shrink-0
              "
            >
              <img
                src={item.icon}
                alt={item.alt}
                className="w-[1.4rem] h-[1.4rem]"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
