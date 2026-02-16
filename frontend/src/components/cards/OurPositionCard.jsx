import AppButton from "../buttons/AppButtons";

const OurPositionCard = ({
  role,
  time,
  site,
  packageAmount,
  experience,
  onApply,
  onViewDetails,
}) => {
  return (
    <div className="w-full min-h-[6.5rem] flex flex-col gap-4 rounded-lg bg-cardClr px-5 py-4 sm:flex-row sm:items-center sm:justify-between border border-lightOutlineClr transition-all duration-300 hover:border-primaryDefaultClr hover:shadow-lg">
      {/* LEFT */}
      <div className="flex-1">
        <h3 className="mb-2 text-28 font-5 font-body text-textDefaultClr">
          {role}
        </h3>

        {/* meta info */}
        <p className="text-20 text-textDisableClr leading-relaxed">
          {time} ({site}) &nbsp;|&nbsp; {packageAmount} &nbsp;|&nbsp;
          <span className="whitespace-nowrap">{experience}</span>
        </p>
      </div>

      {/* RIGHT */}
      <div className="flex flex-row items-center justify-between gap-4 sm:flex-col sm:items-end">
        <AppButton
          onClick={onApply}
          variant="primary"
          size="sm"
          className="rounded-full px-4 py-2 text-19 text-textDefaultClr !leading-none flex items-center justify-center"
        >
          Apply Now
        </AppButton>

        <span
          onClick={onViewDetails}
          className="cursor-pointer text-20 text-textDisableClr hover:underline"
        >
          View Details
        </span>
      </div>
    </div>
  );
};

export default OurPositionCard;
