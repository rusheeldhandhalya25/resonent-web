import { NavLink } from "react-router-dom";
import logo from "../../assets/images/header_logo.svg";
import AppButton from "../../components/buttons/AppButtons";

const Header = () => {

  const navClass = ({ isActive }) =>
    `
      font-body
      text-19
      transition-colors duration-200
      ${isActive
        ? "text-primaryDefaultClr font-7"
        : " font-5 hover:text-primaryDefaultClr"}
    `;

  return (
    <header className="w-full py-4 lg:px-[130px]
          mx-auto
          h-[5rem]
          px-4 sm:px-6 justify-between
          flex items-center bg-textDefaultClr shadow-md">
      

        {/* 1️⃣ LOGO (LEFT) */}
        <div className="flex items-center ">
          <img
            src={logo}
            alt="Resonent"
            className="h-[2.5rem] w-auto"
          />
        </div>

        {/* 2️⃣ NAVBAR (CENTER) */}
        <div className="flex justify-center">
          <nav className="lg:flex items-center gap-[1rem]">
            <NavLink to="/" className={navClass}>Home</NavLink>
            <NavLink to="/about" className={navClass}>About Us</NavLink>
            <NavLink to="/services" className={navClass}>Services</NavLink>
            <NavLink to="/projects" className={navClass}>Client’s Projects</NavLink>
            <NavLink to="/products" className={navClass}>Our Products</NavLink>
            <NavLink to="/career" className={navClass}>Careers</NavLink>
            <NavLink to="/blogs" className={navClass}>Blogs</NavLink>
          </nav>
        </div>

        {/* 3️⃣ BUTTON (RIGHT — REAL BUTTON) */}
        <AppButton variant="primary" size="md" rounded="full" className="margin-right:4rem">
            Start Your Project
        </AppButton>

 
    </header>
  );
};

export default Header;
