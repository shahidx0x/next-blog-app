import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const NewsLatter = () => {
  return (
    <div className=" p-10">
      <h2 className="text-center font-bold text-2xl ">Subscribe To The News Latter</h2>
      <p className="text-center font-medium text-gray-700">join our daily news latter and keep updated with us</p>
      <div className="flex justify-center items-center mt-5">
        <div className="flex gap-3 flex-col md:flex-row">
          <Input className="w-96"/>
          <Button>Subscribe</Button>

        </div>

      </div>
    </div>
  );
};

export default NewsLatter;
