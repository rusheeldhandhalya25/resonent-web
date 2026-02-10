import imageAssets from "../../assets";
import BlogCard from "../../components/cards/BlogCard";
import { useNavigate } from "react-router-dom";

const blogs = [
  {
    id: 1,
    title: "The Best Exercises For Fat Burn",
    excerpt:
      "Looking to burn fat effectively? This guide explores the best fat-burning exercises from HIIT to walking.",
    image: imageAssets.gasSensorImg,
    date: "26 July, 2025",
  },
  {
    id: 2,
    title: "Healthy And Satisfying Snacks",
    excerpt:
      "Are weight loss myths slowing you down? Let’s clear them up so you can focus on what actually works.",
    image: imageAssets.smartEnergyImg,
    date: "26 July, 2025",
  },
  {
    id: 3,
    title: "The Best Exercises For Fat Burn",
    excerpt:
      "Looking to burn fat effectively? This guide explores the best fat-burning exercises from HIIT to walking.",
    image: imageAssets.edgeVendingImg,
    date: "26 July, 2025",
  },
  {
    id: 4,
    title: "Healthy And Satisfying Snacks",
    excerpt:
      "Are weight loss myths slowing you down? Let’s clear them up so you can focus on what actually works.",
    image: imageAssets.fatBurn,
    date: "26 July, 2025",
  },
];

const BlogSection = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* ---------- TOP BLOG (BIG + LIST) ---------- */}
      <section  className="relative w-full bg-backgroundClr px-4 sm:px-6 lg:px-24  ">

         <img src={imageAssets.homeBlog} 
              alt=""
              className="absolute top-0 right-0 w-[150%] z-0 hidden lg:block" />


        <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] gap-6">
          {/* LEFT BIG BLOG */}
          <div onClick={() => navigate('/blogs/healthy-snack')} className="relative rounded-2xl overflow-hidden border border-lightOutlineClr flex flex-col sm:block cursor-pointer">
            <img
              src={imageAssets.factoryImg}
              alt="blog"
              className="w-full h-[250px] sm:h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-backgroundClr/70 via-backgroundClr/40 to-transparent hidden sm:block" />

            <div className="relative sm:absolute bottom-0 left-0 p-4 sm:p-8 w-full bg-backgroundClr sm:bg-transparent">
              <div className="flex items-center gap-2 text-textDisableClr text-sm mb-2">
                <img src={imageAssets.calendarIcon} className="w-4 h-4" />
                <span>26 July, 2025</span>
              </div>

              <h3 className="font-heading font-6 text-xl text-textDefaultClr mb-2">
                Healthy And Satisfying Snacks To Keep You On Track
              </h3>

              <p className="font-body text-sm text-textDisableClr">
                Are weight loss myths slowing you down? Let’s clear them up so you can focus on what actually works. Misinformation about weight loss is everywhere. You’ve probably heard advice like “just eat less” or “carbs are bad”, but how much of it is actually true?
              </p>
            </div>
          </div>

          {/* RIGHT BLOG LIST */}
          <div className="flex flex-col gap-4">
            <p className="text-textDefaultClr font-6 text-24 font-heading">
              Other Featured Post
            </p>
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