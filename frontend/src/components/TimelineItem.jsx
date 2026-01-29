const TimelineItem = ({year ,title ,discription}) => {
    return(
        <div className="flex group gap-8 cursor-pointer transition-all duration-300">
            <div className="min-w-[72px] h-fit px-4 py-2 rounded-lg font-6 font-body text-textDefaultClr border border-textDisableClr/30 group-hover:bg-white group-hover:text-primaryDefaultClr transition">
                    {year}
            </div>

            <div className="relative pl-6">
                    <span className="absolute left-0 top-1 h-full w-[3px] rounded-full bg-textDisableClr/30 group-hover:bg-primaryDefaultClr transition">
                            <h4 className="font-heading font-6 text-textDisableClr group-hover:text-textDefaultClr transition">
                                {title}
                            </h4>

                            <p className="mt-1 text-sm leading-relaxed text-textDisableClr/30 group-hover:text-textDisableClr transition">
                                {discription}
                            </p>
                    </span>
            </div>
        </div>
    );
};

export default TimelineItem;