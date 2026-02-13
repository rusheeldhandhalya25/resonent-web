import imageAssets from "../../assets";
import BlogCard from "../../components/cards/BlogCard";

const blogs = [
  {
    id: 1,
    title: "The Best Exercises For Fat Burn",
    excerpt:
      "Looking to burn fat effectively? This guide explores the best fat-burning exercises, from HIIT to walking and strength training. Learn how to choose workouts that fit your lifestyle and goals, making fitness a sustainable part of your routine.",
    image: imageAssets.gasSensorImg,
    date: "26 July, 2025",
  },
  {
    id: 2,
    title: "Healthy And Satisfying Snacks",
    excerpt:
      "Looking to burn fat effectively? This guide explores the best fat-burning exercises, from HIIT to walking and strength training. Learn how to choose workouts that fit your lifestyle and goals, making fitness a sustainable part of your routine.",
    image: imageAssets.smartEnergyImg,
    date: "26 July, 2025",
  },
  {
    id: 3,
    title: "The Best Exercises For Fat Burn",
    excerpt:
      "Looking to burn fat effectively? This guide explores the best fat-burning exercises, from HIIT to walking and strength training. Learn how to choose workouts that fit your lifestyle and goals, making fitness a sustainable part of your routine.",
    image: imageAssets.edgeVendingImg,
    date: "26 July, 2025",
  },
  {
    id: 4,
    title: "Healthy And Satisfying Snacks",
    excerpt:
      "Looking to burn fat effectively? This guide explores the best fat-burning exercises, from HIIT to walking and strength training. Learn how to choose workouts that fit your lifestyle and goals, making fitness a sustainable part of your routine.",
    image: imageAssets.fatBurn,
    date: "26 July, 2025",
  },
];

const BlogSection = () => {
  return (
    <>
      {/* ---------- TOP BLOG (BIG + LIST) ---------- */}
      <section  className="relative w-full bg-backgroundClr px-4 sm:px-6 lg:px-24 py-16">

         <h2 className="text-60 text-textDefaultClr font-heading font-6 text-center items-center justify-center mb-10 lg:" >
            Blogs
         </h2>

         <img src={imageAssets.homeBlog} 
              alt=""
              className="absolute top-10 right-10 w-[280%] z-0 block" />


        <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] gap-6">
          {/* LEFT BIG BLOG */}
          <div className="relative rounded-2xl overflow-hidden border border-lightOutlineClr">
            <img
              src={imageAssets.factoryImg}
              alt="blog"
              className="w-full h-[40rem] object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

            <div className="absolute bottom-0 left-0 p-8 w-full ">
              <div className="flex items-center gap-2 text-textDisableClr text-sm mb-2">
                <img src={imageAssets.calendarIcon} className="w-4 h-4" />
                <span>26 July, 2025</span>
              </div>

              <h3 className="font-heading font-6 text-17 text-textDefaultClr mb-2">
                Healthy And Satisfying Snacks To Keep You On Track
              </h3>

              <p className="font-body text-17 text-textDisableClr">
                Are weight loss myths slowing you down? Let’s clear them up so you can focus on what actually works. Misinformation about weight loss is everywhere. You’ve probably heard advice like “just eat less” or “carbs are bad”, but how much of it is actually true?
              </p>
            </div>
          </div>

          {/* RIGHT BLOG LIST */}
          <div className="flex w-full h-[40rem] flex-col gap-4">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </section>

      
    </>
  );
};

export default BlogSection;