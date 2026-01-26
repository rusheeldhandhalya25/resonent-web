import logo from "../../assets/images/footer_logo.png";
import instagramicon from "../../assets/images/instagram_svg.svg";
import twittericon from "../../assets/images/twitter.svg";
import behanceicon from "../../assets/images/be_logo.svg";
import dribbbleicon from "../../assets/images/int_logo.svg";
import callicon from "../../assets/images/call_logo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="
        w-full
        h-auto
        bg-backgroundClr
        grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4
        gap-8
        font-body text-20 font-6 text-textDefaultClr
        py-12 px-4 sm:px-6 lg:px-24
      "
    >
      <div className="h-full flex flex-col items-center justify-center space-y-4">
        <img src={logo} alt="resonent logo" className="w-[190px] h-[140px]" />
      </div>

      <div className="flex flex-col gap-2 items-center md:items-start">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/blogs">Blog</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/consulting">Consulting</Link>
      </div>

      <div className="flex flex-col gap-2 items-center md:items-start">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/blogs">Blog</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/consulting">Consulting</Link>
      </div>

      {/* COLUMN 4 */}

      <div className="flex flex-col gap-2 ">
        <span className="text-22 font-6 gap-2 mb-2">Contact Us</span>

        <div className="flex flex-row gap-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="
    h-[3rem] w-[3rem]
    bg-lightOutlineClr
    border-[3px] border-tagClr
    rounded-2xl
    flex items-center justify-center
  "
          >
            <img
              src={instagramicon}
              alt="Instagram"
              className="w-[1.5rem] h-[1.5rem]"
            />
          </a>

          {/* Twitter / X */}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="
      h-[3rem] w-[3rem]
      bg-tagClr
      border-[3px] border-lightOutlineClr
      rounded-2xl
      flex items-center justify-center
    "
          >
            <img
              src={twittericon}
              alt="Twitter"
              className="w-[1.5rem] h-[1.5rem]"
            />
          </a>

          {/* behance */}

          <a
            href="https://www.behance.net"
            target="_blank"
            rel="noopener noreferrer"
            className="
    h-[3rem] w-[3rem]
    bg-tagClr
    border-[3px] border-lightOutlineClr
    rounded-2xl
    flex items-center justify-center
  "
          >
            <img
              src={behanceicon}
              alt="Behance"
              className="w-[1.5rem] h-[1.5rem]"
            />
          </a>

          {/* dribble */}

          <a
            href="https://dribbble.com"
            target="_blank"
            rel="noopener noreferrer"
            className="
    h-[3rem] w-[3rem]
    bg-tagClr
    border-[3px] border-lightOutlineClr
    rounded-2xl
    flex items-center justify-center
  "
          >
            <img
              src={dribbbleicon}
              alt="Dribbble"
              className="w-[1.5rem] h-[1.5rem]"
            />
          </a>

          {/*  call   */}

          <a
            href="tel:+919876543210"
            className="
    h-[3rem] w-[3rem]
    bg-tagClr
    border-[3px] border-lightOutlineClr
    rounded-2xl
    flex items-center justify-center
  "
          >
            <img src={callicon} alt="Call" className="w-[1.5rem] h-[1.5rem]" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
