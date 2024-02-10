import Image from "next/image";
import React from "react";
import PlaceHolder from "../../../assest/image/header.jpg";
import Avater from "../../../assest/image/avater.png";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

import { cn } from "@/lib/utils";
import Link from "next/link";
const BlogsCard = () => {
  return (
    <>
      <Card className={cn("w-96  group")}>
        <div className="overflow-hidden border rounded-xl h-52 group-hover:scale-105 transition-all">
          <Image className="" alt="d" src={PlaceHolder} />
        </div>
        <CardContent>
          <h3 className="mt-2">
            <Link
              className="block text-dark font-bold text-md mb-3.5 "
              href="/pricing"
            >
              <span className="bg-gradient-to-r from-indigo-500/80 to-indigo-400/40 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_3px]">
                Wellness Unveiled: Empowering Your Journey to a Balanced and
                Vibrant Life
              </span>
            </Link>
          </h3>
          <p>
            In a world filled with constant noise and distractions, the allure
            of a simpler lifestyle beckons like a soothing whisper.
          </p>
        </CardContent>
        <CardFooter>
          <div className="flex flex-wrap gap-3 items-center justify-between mt-4.5">
            <div className="flex items-center gap-2.5">
              <Link
                className="flex items-center gap-3"
                href="/author/ryna-kenter"
              >
                <div className="flex w-6 h-6 rounded-full overflow-hidden">
                  <Image
                    alt="user"
                    loading="lazy"
                    width="24"
                    height="24"
                    decoding="async"
                    data-nimg="1"
                    src={Avater}
                    style={{ color: "transparent" }}
                  />
                </div>
                <p className="text-sm">Ryna Kenter</p>
              </Link>
              <span className="flex w-[3px] h-[3px] rounded-full bg-dark-2"></span>
              <p className="text-sm">Aug 24 2023</p>
            </div>
            <a
              className="inline-flex text-blue bg-indigo-200 text-indigo-500 font-medium text-sm py-1 px-3 rounded-full capitalize"
              href="/category/health"
            >
              health
            </a>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default BlogsCard;
