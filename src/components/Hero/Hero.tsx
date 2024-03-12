import React from "react";
import headerImage from "../../assest/image/header.jpg";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="">
      <section className="bg-gray-100 text-gray-800 top-12 lg:relative ">
        <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center justify-center">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

          <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row gap-0 md:gap-36">
            <div className="flex flex-col justify-center text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
              <h1 className="text-3xl lg:text-5xl font-bold">
                Welcome to
                <span className="text-black text-4xl lg:text-7xl">
                  NEXT <span className="">Blog</span>
                </span>
              </h1>
              <p className="mt-6 mb-8 text-lg sm:mb-12">
                Your Gateway to the Future of Blogging! Dive Into the Next
                Generation of Content Creation and Discovery
              </p>
              <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                <Link
                  rel="noopener noreferrer"
                  href="/login"
                  className="px-8 py-3 text-lg font-semibold rounded bg-black text-gray-50"
                >
                  Start Exploring
                </Link>
                <Link
                  rel="noopener noreferrer"
                  href="/registration"
                  className="px-8 py-3 text-lg font-semibold border rounded border-gray-800"
                >
                  Join with us
                </Link>
              </div>
            </div>

            <div className="mt-10 lg:mt-0 lg:w-[50vh]">
              <Image
                src={headerImage}
                alt="Image"
                className="rounded-md object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
