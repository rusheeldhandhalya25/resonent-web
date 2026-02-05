import imageAssets from "../../assets/index.js";
import ProfileCard from "../../components/cards/ProductCard.jsx";


const OurProduct = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20 py-16">
      <div className="font-heading font-6 text-3xl md:text-4xl flex items-center justify-center mb-10 text-center">
        Our Products
      </div>

      <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
        <ProfileCard
          logo={imageAssets.Mediverse}
          title="MediVerse"
          description="MediVerse is a digital product that connects healthcare devices, doctors, and patients in one smart platform. It helps track health data, supports faster decisions, improves remote monitoring, and keeps information secure for better, reliable, and overall smarter medical care every day."
          buttonText="view product"
        />

        <ProfileCard
          logo={imageAssets.Syncworks}
          title="SyncWorks"
          description="Syncworks is a smart platform that connects machines, sensors, and software to improve industrial operations. It collects real-time data, reduces downtime, and increases productivity. With secure cloud integration and easy control, businesses can manage equipment smarter and make faster decisions anywhere, anytime."
          buttonText="view product"
        />

        <ProfileCard
          logo={imageAssets.Storeedge}
          title="StoreEdge"
          description="StoreEdge is a smart warehouse management solution that tracks inventory in real time, reduces human errors, and speeds up operations. It supports seamless order processing, quick product locating, and secure data handling to help businesses improve efficiency, save time, and grow smoothly."
          buttonText="view product"
        />
      </div>
    </div>
  );
};

export default OurProduct;
