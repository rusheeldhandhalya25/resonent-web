const TimelineItem = ({ year, title, description }) => {
  return (
    <div className="group flex gap-8 items-start">

      {/* YEAR (hover ma j visible) */}
      <div
        className="
          min-w-[80px] px-4 py-2 rounded-lg border
          bg-textDefaultClr
          text-primaryDefaultClr text-24 font-body font-7 text-center
          opacity-0 group-hover:opacity-100
          transition-all duration-300
        "
      >
        {year}
      </div>

      {/* LINE + CONTENT */}
      <div className="relative pl-6 max-w-[400px]">

        {/* LINE */}
        <span
          className="
            absolute left-0 top-1 h-full w-[5px] rounded-full
            bg-textDisableClr
           
            opacity-100 group-hover:opacity-0
            transition
          "
        />

        <h4
          className="
            font-body text-24 font-6 text-textDisableClr
            group-hover:text-textDefaultClr 
            group-hover:text-30
            transition-all duration-300
          "
        >
          {title}
        </h4>

        <p
          className="
            mt-2 text-20 leading-relaxed
            text-textDisableClr/70
            group-hover:text-primaryDisableClr
            group-hover:text-24
            transition-all duration-300
          "
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default TimelineItem;
