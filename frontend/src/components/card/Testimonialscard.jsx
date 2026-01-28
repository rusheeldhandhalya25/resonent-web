import StarRating from "../../components/starrating";

const TestimonialCard = ({rating,
                          title,
                          name,
                          role,
                          image,}) => {
  return (
    <div
      className="
        bg-cardClr
        rounded-2xl
        p-5
        w-full
        h-full
        max-w-[250px]
        border border-lightOutlineClr
      "
    >
      {/* Stars */}
      <StarRating rating={rating} />

      {/* Text */}
      <p className="text-textDefaultClr text-sm font-5 mb-6">
        {title}
      </p>

      {/* User */}
      <div className="flex items-center gap-3 bg-tagClr rounded-full p-2">
        <img
          src={image}
          alt={name}
          className="w-9 h-9 rounded-full object-cover"
        />

        <div>
          <p className="text-textDefaultClr text-sm font-6">
            {name}
          </p>
          <p className="text-textDisableClr text-xs">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
