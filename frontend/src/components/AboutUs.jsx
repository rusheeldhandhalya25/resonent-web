import { useNavigate } from "react-router-dom";
import AppButton from "./buttons/AppButtons";

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
    <section className="bg-backgroundClr py-14 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-[40%_60%] gap-10 items-center">
        
        <div className="flex justify-center lg:justify-start">
          <img
            src={image}
            alt={title}
            className="w-[700px] h-[450px] rounded-2xl"
          />
        </div>

        <div className="text-center lg:text-left">
          <h3 className="font-heading text-textDefaultClr text-32 sm:text-36 lg:text-40 font-6">
            {title}
          </h3>

          {descriptions.map((text, index) => (
            <p
              key={index}
              className="mt-4 text-[14px] sm:text-16 font-body text-textDisableClr leading-relaxed text-justify"
            >
              {text}
            </p>
          ))}

          {showButton && (
            <div className="mt-8 flex justify-center lg:justify-start">
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
  );
};

export default Aboutus;
