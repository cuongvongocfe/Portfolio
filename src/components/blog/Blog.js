import React from "react";
import Title from "../home/Title";
import { blogImgOne, blogImgTwo, blogImgThree } from "../../assets";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <div>
      <Title title="Latest" subTitle="Posts" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
          <BlogCard
            image={blogImgOne}
            title=" March 16, 2023"
            subTitle="Tokyo Shinbashi, Japan"
            category="Travel"
          />
          <BlogCard
            image={blogImgTwo}
            title="November 1, 2022"
            subTitle="Tokyo Shinbashi, Japan"
            category="Travel"
          />
          <BlogCard
            image={blogImgThree}
            title="27 days ago"
            subTitle="Ueno, Tokyo, Japan"
            category="Travel"
          />
          <BlogCard
            image={blogImgOne}
            title="July 13, 2022"
            subTitle="Tokyo Shinbashi, Japan"
            category="Travel"
          />
        </div>
        <div className="px-6">
          <BlogCard
            image={blogImgThree}
            title="27 days ago"
            subTitle="Ueno, Tokyo, Japan"
            category="Travel"
          />
          <BlogCard
            image={blogImgTwo}
            title="November 1, 2022"
            subTitle="Tokyo Shinbashi, Japan"
            category="Travel"
          />
          <BlogCard
            image={blogImgOne}
            title="March 16, 2023"
            subTitle="Tokyo Shinbashi, Japan"
            category="Travel"
          />
          <BlogCard
            image={blogImgThree}
            title="27 days ago"
            subTitle="Ueno, Tokyo, Japan"
            category="Travel"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
