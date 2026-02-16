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
    <section className="bg-backgroundClr py-10 sm:py-14 lg:py-10">
      <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-[45%_55%] gap-8 lg:gap-12 items-center">
        {/* Image */}
        <div className="flex justify-center lg:justify-start">
          <img
            src={image}
            alt={title}
            className="
          w-full
          max-w-[350px] sm:max-w-[450px] md:max-w-[550px] lg:max-w-[990px]
          h-auto
          rounded-2xl
          object-cover
          z-70
        "
          />
        </div>

        {/* Content */}
        <div className="text-center lg:text-left">
          <h1 className="font-heading font-5 text-60 text-textDefaultClr  ">
            {title}
          </h1>

          {descriptions.map((text, index) => (
            <p
              key={index}
              className="
            mt-3 sm:mt-4
            font-body
            font-5
            text-textDisableClr
            text-16 sm:text-16 md:text-20
            leading-3
            text-left 
            mr-0 md:mr-10
          "
            >
              {text}
            </p>
          ))}

          {showButton && (
            <div className="mt-6 sm:mt-10 flex justify-center lg:justify-start">
              <AppButton
                variant="primary"
                size="sm"
                rounded="full"
                className="text-textDefaultClr text-19 py-3 px-5"
                onClick={() => navigate(buttonLink)}
              >
                {buttonText}
              </AppButton>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
