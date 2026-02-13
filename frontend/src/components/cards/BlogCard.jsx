import { Link } from "react-router-dom";
import imageAssets from "../../assets/index.js";

const BlogCard = ({ blog }) => {
  return (
    <Link
      to={`/blog/${blog.id}`}
      className="
        grid grid-cols-[20%_80%]
        gap-4
        p-5
        rounded-xl
        bg-cardClr
        border border-lightOutlineClr
        hover:bg-tagClr
        transition-all duration-300
        group
        z-10
      "
    >
      {/* Image */}
      <div className="w-full h-full overflow-hidden rounded-lg">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-[6.5rem] h-[6.5rem] object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between">
        <div>
          <h3 className="font-body font-6 text-18 text-textDefaultClr line-clamp-2">
            {blog.title}
          </h3>

          <p className="mt-1 font-body text-18 text-textDisableClr line-clamp-2">
            {blog.excerpt}
          </p>
        </div>

        {/* Date */}
        <div className="flex items-center gap-2 mt-2">
          <img src={imageAssets.calendarIcon} alt="date" className="w-4 h-4" />
          <span className="font-body text-17 text-textDisableClr">
            {blog.date}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
