import React from "react";

const ProductCard = ({
  logo,
  title,
  description,
  buttonText = "View Product",
  onClick,
}) => {
  const style = {
  backgroundColor: "#002556",
  backgroundImage: `
    linear-gradient(
      240.05deg,
      rgba(4, 47, 105, 0.35) 0.05%,
      rgba(53, 144, 242, 0.35) 21.74%,
      rgba(53, 144, 242, 0.35) 73.07%,
      rgba(4, 47, 105, 0.35) 101.64%
    )
  `,
};


  return (
    <div
      style={style}
      className="
        w-full
        max-w-[320px]
        rounded-2xl
        p-6
        text-center
        text-textDefaultClr
        shadow-lg
        flex
        flex-col
        items-center
      "
    >
      {/* Logo */}
      <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-4">
        <img
          src={logo}
          alt={title}
          className="w-12 h-12 object-contain"
        />
      </div>

      {/* Title */}
      <h3 className="font-heading text-lg font-6 mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="font-body text-sm text-textDisableClr mb-6 leading-relaxed">
        {description}
      </p>

      {/* Button */}
      <button
        onClick={onClick}
        className="
          mt-auto
          bg-primaryDefaultClr
          text-white
          text-sm
          px-5
          py-2
          rounded-full
          hover:opacity-90
          transition
        "
      >
        {buttonText}
      </button>
    </div>
  );
};

export default ProductCard;
