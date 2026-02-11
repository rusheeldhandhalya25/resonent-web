import React from "react";
import FirstParagraph from "./blogs/FirstParagrph";
import BlogSection from "./blogs/BlogSection";
import RecentBlogs from "./blogs/RecentBlogs";

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
