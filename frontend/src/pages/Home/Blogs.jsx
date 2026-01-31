import BlogCard from "../../components/cards/BlogCard";
import AppButton from "../../components/buttons/AppButtons";
import imageAssets from "../../assets";
const blogs = [
  {
    id: 1,
    title: "The Future of IoT: Trends to Watch in 2024",
    excerpt: "The Internet of Things (IoT) is rapidly evolving, with new trends and innovations emerging every day. In this blog post, we'll explore the key trends that will shape the future of IoT in 2024 and beyond.",
    image: imageAssets.factoryImg,
    date: "January 31, 2024",
  },
  {
    id: 2,
    title: "How to Build a Successful IoT Product: A Step-by-Step Guide",
    excerpt: "Building a successful IoT product requires a combination of hardware, software, and business expertise. In this guide, we'll walk you through the entire process, from idea to launch.",
    image: imageAssets.compImg,
    date: "January 15, 2024",
  },
  {
    id: 3,
    title: "The Importance of Data Analytics in IoT",
    excerpt: "Data is the lifeblood of IoT. In this post, we'll discuss the importance of data analytics in IoT and how it can be used to unlock valuable insights and drive business growth.",
    image:  imageAssets.graphImg,
    date: "January 1, 2024",
  },
];

const Blogs = () => {
  return (
    <section className="w-full bg-backgroundClr py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex justify-between items-center mb-12">
          <h2 className="font-heading font-6 text-3xl sm:text-4xl">
            From our Blog
          </h2>
          <AppButton
            text="View All"
            type="button"
            variant="secondary"
            linkTo="/blogs"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
