const TimelineItem = ({ year, title, description }) => {
  return (
    <div className="group flex gap-8 items-start">

      {/* YEAR (hover ma j visible) */}
      <div
        className="
          min-w-[80px] px-4 py-2 rounded-lg border
          bg-textDefaultClr
          text-primaryDefaultClr text-16 font-body font-6 text-center
          opacity-0 group-hover:opacity-100
          transition-all duration-300
        "
      >
        {year}
      </div>

      {/* LINE + CONTENT */}
      <div className="relative pl-6">

        {/* LINE */}
        <span
          className="
            absolute left-0 top-1 h-full w-[3px] rounded-full
            bg-textDisableClr
           
            opacity-100 group-hover:opacity-0
            transition
          "
        />

        <h4
          className="
            font-heading font-6 text-textDisableClr
            group-hover:text-textDefaultClr
            transition
          "
        >
          {title}
        </h4>

        <p
          className="
            mt-2 text-sm leading-relaxed
            text-textDisableClr/70
            group-hover:text-primaryDisableClr
            transition
          "
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default TimelineItem;
