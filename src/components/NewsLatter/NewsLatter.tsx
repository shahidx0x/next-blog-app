import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const NewsLatter = () => {
  return (
    <div className="flex justify-center items-center mt-10">
      <div className="py-10 px-5 lg:py-16 flex flex-col lg:flex-row shadow-sm rounded-md  justify-between  w-[88rem] ">
        <div className="">
          <h2 className="font-bold text-2xl lg:text-3xl text-center lg:text-left pb-5 lg:pb-3">
            Subscrive to News Latter
          </h2>
          <p className="text-sm font-medium text-center">
            Provide your email to get email notification when we launch new
            products or publish new articles
          </p>
        </div>
        <div className="">
          <form>
            <div className="flex flex-col lg:flex-row items-center gap-5">
              <div className="max-w-[350px] w-full mt-5 lg:mt-0">
                <Input
                  id="email"
                  placeholder="Enter your Email"
                  className="rounded-md border border-gray-3 bg-white placeholder:text-dark-5 w-full py-3.5 px-5 outline-none focus:shadow-input focus:ring-2 focus:ring-dark-4/20 focus:border-transparent"
                  type="email"
                  name="email"
                />
                <div data-lastpass-icon-root="true"></div>
              </div>
              <Button className="font-medium rounded-md flex p-5 hover:opacity-90 transition-all ease-linear duration-300 ">
                Subscribe
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsLatter;
