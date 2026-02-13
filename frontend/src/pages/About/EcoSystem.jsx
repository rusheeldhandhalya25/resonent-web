import imageAssets from "../../assets";
import AboutProductCard from "../../components/cards/AboutProductCard";

const Ecosystem = () => {
  return (
    <section className="relative  mt-12">

      <img src={imageAssets.aboutEcosystem} 
           alt=""
           className="absolute top-0 left-0 z-10 block" />


      <h2 className="text-60 text-textDefaultClr font-heading font-6 text-center mb-12">
        Ecosystem
      </h2>

      <div
        className="
          grid
          grid-cols-1
          lg:grid-cols-3
          gap-6
          px-4
          sm:px-6
          lg:px-20
        "
      >
        <AboutProductCard
          logo={imageAssets.peopleTech}
          title="PeopleTech"
          description="PeopleTech is a smart workforce management solution that tracks attendance, improves communication, and boosts productivity. It helps companies manage employees easily with real-time data, secure access, and simple automation tools."
        />

        <AboutProductCard
          logo={imageAssets.smartErp}
          title="SmartERP"
          description="SmartERP is an intelligent business management system that connects finance, sales, inventory, and operations. It automates tasks, improves decision-making, and gives real-time data for efficient and smooth business growth."
        />

        <AboutProductCard
          logo={imageAssets.waariWater}
          title="Waari Water"
          description="Waari Water is a smart water management system that monitors usage, detects leaks, and ensures clean supply. It helps save water, reduce costs, and protect resources using real-time data everywhere."
        />

        {/* LAST ROW (2 cards centered automatically) */}
        <div className="lg:col-span-3 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AboutProductCard
            logo={imageAssets.pramitiRecycling}
            title="Pramiti Recycling"
            description="Pramiti Recycling is a smart waste management solution that tracks materials, increases recycling efficiency, and reduces environmental impact. It supports safe disposal and promotes sustainability through real-time monitoring and automated processes."
          />

          <AboutProductCard
            logo={imageAssets.nirvah}
            title="Nirvah"
            description="Nirvaah is a smart logistics and delivery management solution that tracks shipments in real time, reduces delays, automates workflows, and improves supply chain efficiency for faster, reliable business operations."
          />
        </div>
      </div>
    </section>
  );
};
export default Ecosystem;