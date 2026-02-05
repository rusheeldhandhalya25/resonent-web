import { useState } from "react";
import AppButton from "../buttons/AppButtons";

const ProjectCard = ({ tag, year, title, description, image }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div
      className="
        relative overflow-hidden
        bg-cardClr
        rounded-2xl
        p-3
        w-full
        border border-lightOutlineClr
        border-xl
      "
    >
      {/* GRADIENT OVERLAY */}
      {/* <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(240deg, rgba(53,144,242,0.25), rgba(4,47,105,0.25))",
        }}
      /> */}

      {/* CONTENT */}
      <div className="relative z-10">
        {/* Top row */}
        <div className="flex justify-between items-center mb-4">
          <AppButton
            size="sm"
            variant="primary"
            rounded="full"
            fontClass="font-body text-xs font-5"
            className="px-4 py-2"
          >
            {tag}
          </AppButton>

          <span className="bg-tagClr text-textDefaultClr text-xs px-4 py-2 rounded-full">
            {year}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-textDefaultClr font-6 text-24 mb-2">{title}</h3>

        {/* Description */}
        <p
          className={`text-textDisableClr text-sm mb-4 cursor-pointer ${
            isExpanded ? "" : "line-clamp-2"
          }`}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {description}
        </p>

        {/* Image */}
        <div className="rounded-xl overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-60 sm:h-64 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
