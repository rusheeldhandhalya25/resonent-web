import { NavLink } from "react-router-dom";
import logo from "../../assets/images/header_logo.svg";

const Header = () => {
  const navLinkClass = ({ isActive }) =>
    `font-body text-19 font-medium transition
     ${isActive ? "text-primaryDefaultClr font-7" : " hover:text-primaryDefaultClr font-5"}`;

  return (
    <header className="w-full h-[80px] bg-textDefaultClr flex items-center">
      <div className=" px-8 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center px-6 py-2.5">
          <img
            src={logo}
            alt="Resonent"
            className="h-7 w-auto"
          />
        </div>

        {/* NAV */}
        <nav className=" lg:flex items-center gap-8">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/about" className={navLinkClass}>About Us</NavLink>
          <NavLink to="/services" className={navLinkClass}>Services</NavLink>
          <NavLink to="/projects" className={navLinkClass}>Client’s Projects</NavLink>
          <NavLink to="/products" className={navLinkClass}>Our Products</NavLink>
          <NavLink to="/career" className={navLinkClass}>Careers</NavLink>
          <NavLink to="/blogs" className={navLinkClass}>Blogs</NavLink>
        </nav>

        {/* CTA BUTTON */}
        <button className="hidden lg:inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-primaryDefaultClr text-white font-body text-16 font-medium">
          Start Your Project
        </button>

      </div>
    </header>
  );
};

export default Header;
