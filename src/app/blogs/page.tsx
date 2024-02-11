import AuthorsCard from "@/components/Cards/AuthorsCard/AuthorsCard";
import BlogsCard from "@/components/Cards/BlogsCard/BlogsCard";
import React from "react";

const ArchivesPage = () => {
  return (
    <div className=" flex justify-center items-center flex-col mt-36">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col justify-center items-center gap-5">
          <h2 className="font-bold  text-5xl">Archives</h2>
          <p className="font-medium text-center pb-4 font-sm ">
            Uncover the Depths of Insight, Inspiration, and Information in Our
            Diverse and Enthralling Blogosphere
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 p-0 lg:p-6">
        <BlogsCard />
        <BlogsCard />
        <BlogsCard />
        <BlogsCard />
        <BlogsCard />
        <BlogsCard />
        <BlogsCard />
        <BlogsCard />
        <BlogsCard />
      </div>
    </div>
  );
};

export default ArchivesPage;
