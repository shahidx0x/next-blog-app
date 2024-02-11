import { ArrowRight } from "lucide-react";
import React from "react";
import { Separator } from "../ui/separator";
import BlogsCard from "../Cards/BlogsCard/BlogsCard";
import { cn } from "@/lib/utils";
import AuthorsCard from "../Cards/AuthorsCard/AuthorsCard";
import NewsLatter from "../NewsLatter/NewsLatter";

const Authors = () => {
  return (
    <>
      <div className=" flex flex-col justify-center items-center">
        <div className="flex flex-col lg:flex-row justify-between items-center w-full lg:w-[88rem] p-10">
          <h2 className="text-3xl font-medium">Top Authors</h2>
          <div className="flex">
            <p className="font-bold">See All Authors</p>
            <div>
              <ArrowRight className="mt-1 ml-1" size={20} />
            </div>
          </div>
        </div>
        <Separator className={cn("lg:flex lg:w-[88rem]")} />
        <div className="mt-5 flex justify-center flex-wrap gap-10">
          <AuthorsCard />
          <AuthorsCard />
          <AuthorsCard />
        </div>
      </div>
    </>
  );
};

export default Authors;
