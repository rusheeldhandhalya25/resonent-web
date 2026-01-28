const ExpertiseCard = ({ icon, title, description }) => {
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
        group
        rounded-2xl p-6
        flex flex-col items-center text-center
        transition-all duration-300
         hover:bg-primaryDefaultClr
      "
    >
      {/* Icon */}
      <img src={icon} alt={`${title} icon`} className="w-8 h-8 mb-4" />

      {/* Title */}
      <p className="font-body font-6 text-lg text-textDefaultClr group-hover:text-white">
        {title}
      </p>

      {/* Description */}
      <p className="font-body font-2 text-sm text-textDisableClr mt-2 group-hover:text-white">
        {description}
      </p>
    </div>
  );
};

export default ExpertiseCard;
