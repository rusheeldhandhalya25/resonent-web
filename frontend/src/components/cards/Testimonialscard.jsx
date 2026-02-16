import StarRating from "../StarRating";

const TestimonialCard = ({ rating, title, name, role, image }) => {
  return (
    <div
      className="
    relative
    bg-cardClr
    rounded-2xl
    border border-lightOutlineClr
    p-10
    pb-20    
    w-full
    h-full    
    flex
    flex-col
  "
    >
      {/* Stars */}
      <StarRating rating={rating} />

      {/* Description */}
      <p
        className="
      mt-3
      text-textDefaultClr
      text-18
      font-6
      leading-relaxed
      line-clamp-8
      pb-10
    "
      >
        {title}
      </p>

      {/* Profile */}
      <div
        className="
      absolute
      left-4
      right-4
      bottom-4
      flex
      items-center
      gap-3
      bg-tagClr
      px-3
      py-2
      rounded-xl
      sm:rounded-2xl
      xl:rounded-full
    "
      >
        <img
          src={image}
          alt={name}
          className="w-10 h-10 rounded-full object-cover flex-shrink-0"
        />

        <div className="min-w-0">
          <p className="text-sm font-6 text-textDefaultClr truncate">{name}</p>
          <p className="text-xs text-textDisableClr truncate">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
