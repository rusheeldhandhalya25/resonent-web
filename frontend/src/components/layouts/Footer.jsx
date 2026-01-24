import logo from "../../assets/images/footer_logo.png";
import instagramicon from "../../assets/images/instagram_svg.svg";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="
        w-full
        h-auto
        bg-backgroundClr
        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4
        gap-8
        font-body text-20 font-6 text-textDefaultClr
        py-12 px-4 sm:px-6 lg:px-24
      "
    >
      
      <div className="h-full flex flex-col items-center justify-center space-y-4">
        <img src={logo} alt="resonent logo" className="w-[190px] h-[140px]" />
      </div>
      
      <div className="flex flex-col gap-2 pl-[144px]">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/blogs">Blog</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/consulting">Consulting</Link>

      </div>

      <div className="flex flex-col gap-2 pl-[138px]">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/blogs">Blog</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/consulting">Consulting</Link>

      </div>
      
      {/* COLUMN 4 */}

      <div className="flex flex-col gap-2 ">
        <span className="text-22 font-6 gap-2 mb-2">Contact Us</span>

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
    <img src={twittericon} alt="Twitter" className="w-[1.5rem] h-[1.5rem]" />
  </a>


      </div>

   
    </footer>
  );
};

export default Footer;
