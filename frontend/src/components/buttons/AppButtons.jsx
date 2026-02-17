import { twMerge } from "tailwind-merge";

const baseStyles = `
  flex items-center justify-center
  transition-all duration-200
  focus:outline-none
  active:scale-95
`;

const sizeVariants = {
  sm: "px-4 py-2",
  md: "px-5 py-2",
  lg: "px-6 py-3",
};

const variantStyles = {
  primary: "bg-primaryDefaultClr text-white hover:bg-primaryDefaultClr/50",
  outline: "border border-primaryDefaultClr text-primaryDefaultClr",
  light: "bg-textDefaultClr text-primaryDefaultClr",
  secondary:
    "bg-textDisableClr/40 text-textDefaultClr hover:bg-primaryDisableClr/20",
  primaryDefault:
    "bg-primaryDefaultClr text-textDefaultClr hover:bg-primaryDefaultClr/50",
};

const radiusVariants = {
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full",
};

const AppButton = ({
  children,
  type = "button",
  onClick,
  size = "md",
  variant = "primary", //  DEFAULT FIX
  rounded = "full",
  className = "",
  fontClass = "font-body text-19 font-5", //  DEFAULT FIX
  disabled = false,
  fullWidth = false,
}) => {
  const finalClasses = twMerge(
    baseStyles,
    sizeVariants[size],
    variantStyles[variant], 
    radiusVariants[rounded],
    fullWidth && "w-full",
    disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
    className,
     
  );

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={finalClasses}
    >
      <span className={fontClass}>{children}</span>
    </button>
  );
};

export default AppButton;
