import React from "react";
import FirstParagraph from "./Blogs/FirstParagrph";
import BlogSection from "./Blogs/BlogSection";
import RecentBlogs from "./Blogs/RecentBlogs";

function Blogs() {
  return (
    <div className="bg-backgroundClr ">
      <FirstParagraph />
      <BlogSection />
      <RecentBlogs />
    </div>
  );
}

export default Blogs;
