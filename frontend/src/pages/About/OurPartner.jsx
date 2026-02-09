import imageAssets from "../../assets";


const logos = [
  imageAssets.skoda,
  imageAssets.swiggy,
  imageAssets.kia,
  imageAssets.nokia,
  imageAssets.intel,
  imageAssets.mahindra,
  imageAssets.oppo,
  imageAssets.fila
];

const OurPartner = () => {
  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-20">
      
      {/* Heading */}
      <h2 className="text-28 sm:text-32 lg:text-40 font-heading font-6 text-textDefaultClr text-center mb-10">
        Our Partners
      </h2>

      {/* Logos Grid */}
      <div
        className="
          grid
          grid-cols-2
          sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-8
          gap-y-10
          gap-x-6
          items-center
          justify-items-center
        "
      >
        {logos.map((logo, index) => (
          <div
            key={index}
            className="group flex items-center justify-center"
          >
            <img
              src={logo}
              alt="partner logo"
              className="
                h-10
                sm:h-12
                md:h-14
                lg:h-16
                opacity-60
                transition
                duration-300
                ease-in-out
                group-hover:opacity-100
                group-hover:brightness-0
                group-hover:invert
              "
            />
          </div>
        ))}
      </div>
    </section>
  );
};
export default OurPartner;