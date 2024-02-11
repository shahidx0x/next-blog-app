import Image from "next/image";
import React from "react";
import BlogPlaceHolder from "../../../assest/image/blog_placeholder.jpg";
import Avater from "../../../assest/image/avater.png";
import Link from "next/link";
import AuthorPostCard from "@/components/Cards/AuthorsCard/AuthorPostCard";

const page = () => {
  return (
    <div>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 xl:px-0 mt-36 h-screen">
        <div className="flex flex-wrap gap-10 h-screen">
          <div className="xl:max-w-[770px] w-full h-screen">
            <div className="h-[400px] mb-10 rounded-md">
              <Image className="rounded-md" src={BlogPlaceHolder} alt="" />
            </div>
            <h1 className="font-bold text-2xl sm:text-4xl lg:text-md text-gray-700 mb-5.5 pt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
              itaque quas
            </h1>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-6">
              <Link
                className="flex w-8.5 h-8.5 rounded-full overflow-hidden"
                href="/author/adrio-devid"
              >
                <Image
                  alt="Adrio Devid"
                  decoding="async"
                  loading="lazy"
                  width="34"
                  height="34"
                  data-nimg="1"
                  src={Avater}
                  style={{ color: "transparent" }}
                />
              </Link>
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex flex-wrap items-center gap-2.5">
                  <h4 className="text-custom-sm">
                    <a href="/author/adrio-devid">Adrio Devid</a>
                  </h4>
                  <span className="flex w-[3px] h-[3px] rounded-full bg-dark-2"></span>
                  <p className="text-custom-sm">Aug 24 2023</p>
                  <span className="flex w-[3px] h-[3px] rounded-full bg-dark-2"></span>
                  <p className="text-custom-sm">12 min read</p>
                </div>
                <Link
                  href="/category/travel"
                  className="font-medium text-md border bg-indigo-200 text-indigo-500 py-1 px-3 rounded-full capitalize"
                >
                  travel
                </Link>
              </div>
            </div>
            <AuthorPostCard />
          </div>
          <div className="max-w-[370px] w-full h-screen ">
            <div className="flex flex-col gap-10">
              <div className="max-w-[370px] w-full rounded-[10px] border border-gray-3 p-4 sm:p-7.5 lg:p-10">
                <h4 className="font-semibold text-2xl text-gray-500 mb-8">
                  Explore Topics
                </h4>
                <div className="flex flex-col gap-3">
                  <a
                    className="group flex items-center justify-between gap-2"
                    href="/category/travel"
                  >
                    <p className="ease-in duration-200 group-hover:text-dark">
                      health
                    </p>
                    <span className="flex items-center justify-center max-w-[32px] w-full h-8 rounded-full text-custom-sm border border-gray-3 ease-in duration-200 group-hover:text-white group-hover:bg-dark group-hover:border-dark">
                      03
                    </span>
                  </a>
                  <a
                    className="group flex items-center justify-between gap-2"
                    href="/category/travel"
                  >
                    <p className="ease-in duration-200 group-hover:text-dark">
                      lifestyle
                    </p>
                    <span className="flex items-center justify-center max-w-[32px] w-full h-8 rounded-full text-custom-sm border border-gray-3 ease-in duration-200 group-hover:text-white group-hover:bg-dark group-hover:border-dark">
                      01
                    </span>
                  </a>
                  <a
                    className="group flex items-center justify-between gap-2"
                    href="/category/travel"
                  >
                    <p className="ease-in duration-200 group-hover:text-dark">
                      travel
                    </p>
                    <span className="flex items-center justify-center max-w-[32px] w-full h-8 rounded-full text-custom-sm border border-gray-3 ease-in duration-200 group-hover:text-white group-hover:bg-dark group-hover:border-dark">
                      03
                    </span>
                  </a>
                  <a
                    className="group flex items-center justify-between gap-2"
                    href="/category/travel"
                  >
                    <p className="ease-in duration-200 group-hover:text-dark">
                      technology
                    </p>
                    <span className="flex items-center justify-center max-w-[32px] w-full h-8 rounded-full text-custom-sm border border-gray-3 ease-in duration-200 group-hover:text-white group-hover:bg-dark group-hover:border-dark">
                      02
                    </span>
                  </a>
                  <a
                    className="group flex items-center justify-between gap-2"
                    href="/category/travel"
                  >
                    <p className="ease-in duration-200 group-hover:text-dark">
                      culture
                    </p>
                    <span className="flex items-center justify-center max-w-[32px] w-full h-8 rounded-full text-custom-sm border border-gray-3 ease-in duration-200 group-hover:text-white group-hover:bg-dark group-hover:border-dark">
                      01
                    </span>
                  </a>
                </div>
              </div>
              <div className="max-w-[370px] w-full rounded-[10px] border border-gray-3 p-4 sm:p-7.5 lg:p-10">
                <h4 className="font-semibold text-2xl text-gray-500 mb-7.5">
                  Recent Posts
                </h4>
                <div className="flex flex-col gap-7 pt-10">
                  <Link
                    className="group flex gap-2"
                    href="/posts/wellness-unveiled-empowering-your-journey-to-a-balanced-and-vibrant-life"
                  >
                    <div className="w-[80px] relative">
                      <Image
                        alt="Wellness Unveiled: Empowering Your Journey to a Balanced and Vibrant Life"
                        loading="lazy"
                        src={Avater}
                        decoding="async"
                        data-nimg="fill"
                        className="rounded-full w-full object-cover"
                        sizes="100vw"
                        style={{
                          position: "absolute",
                          height: "90%",
                          width: "90%",
                          inset: "0px",
                          color: "transparent",
                        }}
                      />
                    </div>
                    <div>
                      <h5 className="font-medium text-sm text-dark duration-200 ease-in mb-1.5 group-hover:text-primary">
                        Wellness Unveiled: Empowering Your ...
                      </h5>
                      <div className="flex items-center gap-2">
                        <p className="text-custom-xs">Adrio Devid</p>
                        <span className="flex w-[3px] h-[3px] rounded-full bg-dark-2"></span>
                        <p className="text-custom-xs">Aug 24 2023</p>
                      </div>
                    </div>
                  </Link>
                  <Link
                    className="group flex"
                    href="/posts/wellness-unveiled-empowering-your-journey-to-a-balanced-and-vibrant-life"
                  >
                    <div className="w-[80px] relative">
                      <Image
                        alt="Wellness Unveiled: Empowering Your Journey to a Balanced and Vibrant Life"
                        loading="lazy"
                        src={Avater}
                        decoding="async"
                        data-nimg="fill"
                        className="rounded-full w-full object-cover"
                        sizes="100vw"
                        style={{
                          position: "absolute",
                          height: "90%",
                          width: "90%",
                          inset: "0px",
                          color: "transparent",
                        }}
                      />
                    </div>
                    <div>
                      <h5 className="font-medium text-sm text-dark duration-200 ease-in mb-1.5 group-hover:text-primary">
                        Wellness Unveiled: Empowering Your ...
                      </h5>
                      <div className="flex items-center gap-2">
                        <p className="text-custom-xs">Adrio Devid</p>
                        <span className="flex w-[3px] h-[3px] rounded-full bg-dark-2"></span>
                        <p className="text-custom-xs">Aug 24 2023</p>
                      </div>
                    </div>
                  </Link>
                  <Link
                    className="group flex"
                    href="/posts/wellness-unveiled-empowering-your-journey-to-a-balanced-and-vibrant-life"
                  >
                    <div className="w-[80px] relative">
                      <Image
                        alt="Wellness Unveiled: Empowering Your Journey to a Balanced and Vibrant Life"
                        loading="lazy"
                        src={Avater}
                        decoding="async"
                        data-nimg="fill"
                        className="rounded-full w-full object-cover"
                        sizes="100vw"
                        style={{
                          position: "absolute",
                          height: "90%",
                          width: "90%",
                          inset: "0px",
                          color: "transparent",
                        }}
                      />
                    </div>
                    <div>
                      <h5 className="font-medium text-sm text-dark duration-200 ease-in mb-1.5 group-hover:text-primary">
                        Wellness Unveiled: Empowering Your ...
                      </h5>
                      <div className="flex items-center gap-2">
                        <p className="text-custom-xs">Adrio Devid</p>
                        <span className="flex w-[3px] h-[3px] rounded-full bg-dark-2"></span>
                        <p className="text-custom-xs">Aug 24 2023</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
