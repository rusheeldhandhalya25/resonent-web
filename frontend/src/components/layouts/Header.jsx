import { useState } from "react";
import { NavLink } from "react-router-dom";
import imageAssets from "../../assets";
import AppButton from "../buttons/AppButtons";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navClass = ({ isActive }) =>
    `font-body text-20 transition-colors duration-200 ${
      isActive
        ? "text-primaryDefaultClr font-7"
        : "font-5 hover:text-primaryDefaultClr"
    }`;

  const mobileNavClass = ({ isActive }) =>
    `block py-3 text-center font-body font-5 text-lg w-full ${
      isActive
        ? "text-primaryDefaultClr font-5"
        : "font-5 hover:text-primaryDefaultClr"
    }`;

  const HamburgerIcon = () => (
    <svg
      className="w-8 h-8 text-backgroundClr"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16m-7 6h7"
      />
    </svg>
  );

  const CloseIcon = () => (
    <svg
      className="w-8 h-8 text-backgroundClr"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );

  const NavLinks = ({ onLinkClick, className, linkClassName }) => (
    <nav className={className}>
      <NavLink to="/" className={linkClassName} onClick={onLinkClick}>
        Home
      </NavLink>
      <NavLink to="/about" className={linkClassName} onClick={onLinkClick}>
        About Us
      </NavLink>
      <NavLink to="/services" className={linkClassName} onClick={onLinkClick}>
        Services
      </NavLink>
      <NavLink to="/projects" className={linkClassName} onClick={onLinkClick}>
        Client’s Projects
      </NavLink>
      <NavLink to="/products" className={linkClassName} onClick={onLinkClick}>
        Our Products
      </NavLink>
      <NavLink to="/career" className={linkClassName} onClick={onLinkClick}>
        Careers
      </NavLink>
      <NavLink to="/blogs" className={linkClassName} onClick={onLinkClick}>
        Blogs
      </NavLink>
    </nav>
  );

  return (
    <header className="w-full h-20 bg-textDefaultClr shadow-md sticky top-0 z-50">
      <div className="w-full max-w-[1200px] mx-auto h-full px-4 sm:px-6 flex items-center justify-between">
        {/* LEFT SIDE (Mobile + Desktop) */}
        <div className="flex items-center gap-4">
          {/* Hamburger - mobile/tablet */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>

          {/* Logo */}
          <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
            <img
              src={imageAssets.headerLogo}
              alt="Resonent"
              className="h-[1.9rem]
                        sm:h-[2.1rem]
                        lg:h-[2.4rem]
                        w-auto"
            />
          </NavLink>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex">
          <NavLinks
            className="flex items-center gap-10"
            linkClassName={navClass}
          />
        </div>

        {/* RIGHT SIDE BUTTON */}
        <div className="flex items-center  sm:pr-2">
         <AppButton
                variant="primary"
                rounded="full"
                className="
                  px-3 py-1 text-16
                  sm:px-4 sm:py-2 sm:text-19
                  lg:px-6 lg:py-3 lg:text-20
                  whitespace-nowrap
                  text-textDefaultClr
                "
              >
                Start Your Project
              </AppButton>

        </div>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-[4rem] left-0 w-full bg-textDefaultClr shadow-lg">
          <NavLinks
            className="flex flex-col items-center pt-3 pb-4"
            linkClassName={mobileNavClass}
            onLinkClick={() => setIsMenuOpen(false)}
          />
        </div>
      )}
    </header>
  );
};

export default Header;
