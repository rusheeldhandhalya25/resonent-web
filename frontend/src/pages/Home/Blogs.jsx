import imageAssets from "../../assets";
import BlogCard from "../../components/cards/BlogCard";

const blogs = [
  {
    id: 1,
    title: "The Best Exercises For Fat Burn",
    excerpt:
      "Looking to burn fat effectively? This guide explores the best fat-burning exercises from HIIT to walking.",
    image: imageAssets.compImg,
    date: "26 July, 2025",
  },
  {
    id: 2,
    title: "Healthy And Satisfying Snacks",
    excerpt:
      "Are weight loss myths slowing you down? Let’s clear them up so you can focus on what actually works.",
    image: imageAssets.graphImg,
    date: "26 July, 2025",
  },
  {
    id: 3,
    title: "The Best Exercises For Fat Burn",
    excerpt:
      "Looking to burn fat effectively? This guide explores the best fat-burning exercises from HIIT to walking.",
    image: imageAssets.compImg,
    date: "26 July, 2025",
  },
  {
    id: 4,
    title: "Healthy And Satisfying Snacks",
    excerpt:
      "Are weight loss myths slowing you down? Let’s clear them up so you can focus on what actually works.",
    image: imageAssets.graphImg,
    date: "26 July, 2025",
  },
];

const BlogSection = () => {
  return (
    <>
      {/* ---------- TOP BLOG (BIG + LIST) ---------- */}
      <section  className="relative w-full bg-backgroundClr px-4 sm:px-6 lg:px-24 py-16">

         <h2 className="text-40 text-textDefaultClr font-heading font-6 text-center items-center justify-center mb-5" >
            Blogs
         </h2>

         <img src={imageAssets.homeBlog} 
              alt=""
              className="absolute top-0 right-0 w-[150%] z-0 block" />


        <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] gap-6">
          {/* LEFT BIG BLOG */}
          <div className="relative rounded-2xl overflow-hidden border border-lightOutlineClr">
            <img
              src={imageAssets.factoryImg}
              alt="blog"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-backgroundClr/70 via-backgroundClr/40 to-transparent" />

            <div className="absolute bottom-0 left-0 p-8 max-w-[560px]">
              <div className="flex items-center gap-2 text-textDisableClr text-sm mb-2">
                <img src={imageAssets.calendarIcon} className="w-4 h-4" />
                <span>26 July, 2025</span>
              </div>

              <h3 className="font-heading font-6 text-xl text-textDefaultClr mb-2">
                Healthy And Satisfying Snacks To Keep You On Track
              </h3>

              <p className="font-body text-sm text-textDisableClr">
                Are weight loss myths slowing you down? Let’s clear them up so
                you can focus on what actually works.
              </p>
            </div>
          </div>

          {/* RIGHT BLOG LIST */}
          <div className="flex flex-col gap-4">
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