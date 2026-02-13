import React from "react";
import AppButton from "../../components/buttons/AppButtons.jsx";
import imageAssets from "../../assets/index.js";

/* 1️⃣ DATA */
const blogsData = [
  {
    image: imageAssets.gasSensorImg,
    title: "The Best Exercises For Fat Burn",
    description:
      "Looking to burn fat effectively? This guide explores the best fat-burning exercises, from HIIT to walking and strength training. Learn how to choose workouts that fit your lifestyle and goals, making fitness a sustainable part of your routine.",
    date: "26 July, 2025",
  },
  {
    image: imageAssets.smartEnergyImg,
    title: "The Best Exercises For Fat Burn",
    description:
      "Looking to burn fat effectively? This guide explores the best fat-burning exercises, from HIIT to walking and strength training. Learn how to choose workouts that fit your lifestyle and goals, making fitness a sustainable part of your routine.",
    date: "26 July, 2025",
  },
  {
    image: imageAssets.edgeVendingImg,
    title: "The Best Exercises For Fat Burn",
    description:
      "Looking to burn fat effectively? This guide explores the best fat-burning exercises, from HIIT to walking and strength training. Learn how to choose workouts that fit your lifestyle and goals, making fitness a sustainable part of your routine.",
    date: "26 July, 2025",
  },
  {
    image: imageAssets.edgeVendingImg,
    title: "The Best Exercises For Fat Burn",
    description:
      "Looking to burn fat effectively? This guide explores the best fat-burning exercises, from HIIT to walking and strength training. Learn how to choose workouts that fit your lifestyle and goals, making fitness a sustainable part of your routine.",
    date: "26 July, 2025",
  },
  {
    image: imageAssets.gasSensorImg,
    title: "The Best Exercises For Fat Burn",
    description:
      "Looking to burn fat effectively? This guide explores the best fat-burning exercises, from HIIT to walking and strength training. Learn how to choose workouts that fit your lifestyle and goals, making fitness a sustainable part of your routine.",
    date: "26 July, 2025",
  },
  {
    image: imageAssets.smartEnergyImg,
    title: "The Best Exercises For Fat Burn",
    description:
      "Looking to burn fat effectively? This guide explores the best fat-burning exercises, from HIIT to walking and strength training. Learn how to choose workouts that fit your lifestyle and goals, making fitness a sustainable part of your routine.",
    date: "26 July, 2025",
  },
  {
    image: imageAssets.smartEnergyImg,
    title: "The Best Exercises For Fat Burn",
    description:
      "Looking to burn fat effectively? This guide explores the best fat-burning exercises, from HIIT to walking and strength training. Learn how to choose workouts that fit your lifestyle and goals, making fitness a sustainable part of your routine.",
    date: "26 July, 2025",
  },
  {
    image: imageAssets.gasSensorImg,
    title: "The Best Exercises For Fat Burn",
    description:
      "Looking to burn fat effectively? This guide explores the best fat-burning exercises, from HIIT to walking and strength training. Learn how to choose workouts that fit your lifestyle and goals, making fitness a sustainable part of your routine.",
    date: "26 July, 2025",
  },
  {
    image: imageAssets.edgeVendingImg,
    title: "The Best Exercises For Fat Burn",
    description:
      "Looking to burn fat effectively? This guide explores the best fat-burning exercises, from HIIT to walking and strength training. Learn how to choose workouts that fit your lifestyle and goals, making fitness a sustainable part of your routine.",
    date: "26 July, 2025",
  },
  
  
];

/* 2️⃣ CARD COMPONENT (inside same file, as tu maange che) */
const BlogCard = ({ image, title, description, date }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  return (
    <div className="bg-cardClr rounded-2xl p-4">
      <img
        src={image}
        alt={title}
        className="h-44 w-full rounded-xl object-cover"
      />

      <div className="mt-4 space-y-2">
        <h3 className="text-textDefaultClr text-19 font-body font-5">
          {title}
        </h3>

        <p
          className={`text-textDisableClr text-17 font-body font-5 cursor-pointer ${
            isExpanded ? "" : "line-clamp-2"
          }`}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {description}
        </p>

        <div className="flex flex-row items-center gap-2">
          <img
            src={imageAssets.calendarIcon}
            alt="date"
            className="w-[15px] h-[15px]"
          />
          <p className="text-textDisableClr text-18 font-body font-5">
            {date}
          </p>
        </div>
      </div>
    </div>
  );
};

function RecentBlogs() {
  return (
    <div className="bg-backgroundClr px-4 sm:px-6 lg:px-24 py-12">
      {/* HEADER */}
      <div className="mb-8 flex flex-col items-center justify-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <h2 className="font-heading font-6 text-40 text-textDefaultClr">
          Recent Blogs
        </h2>

        <AppButton variant="primary" rounded="full" size="sm">
          Load More
        </AppButton>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {blogsData.map((item, index) => (
          <BlogCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            date={item.date}
          />
        ))}
      </div>
    </div>
  );
}

export default RecentBlogs;
