import { FaStar } from "react-icons/fa";

const StarRating = ({ rating = 5 }) => {
  return (
    <div className="flex gap-1 mb-3">
      {[1, 2, 3, 4, 5].map((star) => (
        <FaStar
          key={star}
          className={
            star <= rating
              ? "text-textDefaultClr"   
              : "text-textDisableClr"   
          }
          size={14}
        />
      ))}
    </div>
  );
};

export default StarRating;
