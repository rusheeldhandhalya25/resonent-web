import TestimonialCard from "../../components/cards/Testimonialscard";
import user1Img from "../../assets/images/user_1.png";
import user2Img from "../../assets/images/user_2.png";

const Testimonials = () => {
  return (
    <section className="w-full bg-backgroundClr py-16 sm:py-20">
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        <h2 className="font-heading font-6 text-3xl sm:text-4xl text-center mb-12">
          Testimonials
        </h2>

        {/* Cards */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-6
            place-items-center
          "
        >
          <TestimonialCard
            rating={4}
            title="The Marketing Strategy They Created For My Startup Boosted Our Online Visibility And Brought In More Qualified Leads Than I Expected."
            name="Noah Davis"
            role="Software Engineer"
            image={user1Img}
          />

          <TestimonialCard
            rating={4}
            title="The Branding Service Gave My Clothing Line A Fresh And Modern Look, Making It More Appealing To Customers."
            name="Ethan Hernandez"
            role="Financial Analyst"
            image={user2Img}
          />

          <TestimonialCard
            rating={4}
            title="The Team’s Development Skills Helped Create A Campaign Dashboard That Streamlined My Work And Boosted Results."
            name="Lucas Green"
            role="Digital Marketer"
            image={user1Img}
          />

          <TestimonialCard
            rating={4}
            title="Their Website Design Exceeded My Expectations. It’s Clean, Professional, And Perfectly Tailored To My Services."
            name="Mia Moore"
            role="Event Planner"
            image={user2Img}
          />
        </div>
      </div>
    </section>
  );
};
export default Testimonials;