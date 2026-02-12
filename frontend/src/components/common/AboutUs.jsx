import { useNavigate } from "react-router-dom";
import AppButton from "../buttons/AppButtons";

const Aboutus = ({
  image,
  title,
  descriptions = [],
  buttonText = "About us",
  buttonLink = "/about",
  showButton = true,
}) => {
  const navigate = useNavigate();

  return (
    <section className="bg-backgroundClr py-10 sm:py-14 lg:py-20">
  <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-[40%_60%] gap-8 lg:gap-12 items-center">
    
    {/* Image */}
    <div className="flex justify-center lg:justify-start">
      <img
        src={image}
        alt={title}
        className="
          w-full
          max-w-[350px] sm:max-w-[450px] md:max-w-[550px] lg:max-w-[920px]
          h-auto
          rounded-2xl
          object-cover
          z-10
        "
      />
    </div>

    {/* Content */}
    <div className="text-center lg:text-left">
      <h3 className="font-heading text-textDefaultClr text-24 sm:text-28 md:text-32 lg:text-40 font-6">
        {title}
      </h3>

      {descriptions.map((text, index) => (
        <p
          key={index}
          className="
            mt-3 sm:mt-4
            text-13 sm:text-14 md:text-16
            font-body
            text-textDisableClr
            leading-relaxed
            text-left sm:text-justify
          "
        >
          {text}
        </p>
      ))}

      {showButton && (
        <div className="mt-6 sm:mt-8 flex justify-center lg:justify-start">
          <AppButton
            variant="primary"
            size="sm"
            rounded="full"
            onClick={() => navigate(buttonLink)}
          >
            {buttonText}
          </AppButton>
        </div>
      )}
    </div>
  </div>
</section>
  )
};

export default Aboutus;
