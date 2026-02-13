const TeamCard = ({ image, name, role, avatar }) => {
  return (
    <div className="relative group">
      {/* IMAGE */}
      <div className="overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={name}
          className="w-full aspect-[4/5] object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* INFO PILL */}
      <div
        className="
          absolute
          bottom-3
          left-1/2
          -translate-x-1/2
          w-[90%]
          bg-white
          rounded-full
          px-4 py-2
          flex items-center gap-3
          shadow-lg
        "
      >
        {/* avatar */}
        <img
          src={avatar}
          alt={name}
          className="w-9 h-9 rounded-full object-cover"
        />

        {/* text */}
        <div className="leading-tight">
          <p className="text-24 font-semibold text-[#002556]">
            {name}
          </p>
          <p className="text-19 text-primaryDefaultClr">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
