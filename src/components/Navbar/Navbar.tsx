"use client";
import React from "react";
import Link from "next/link";
import { NavItems } from "@/constant/constant";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Separator } from "../ui/separator";
import SearchPost from "./Search/SearchPost";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div>
      <header className=" bg-gray-100/90 backdrop-blur-md text-gray-800 fixed w-full z-50 top-0 ">
        <div className="container flex justify-between h-16 mx-auto">
          <a
            rel="noopener noreferrer"
            href="#"
            aria-label="Back to homepage"
            className="flex items-center p-2"
          >
            <h2 className="text-3xl font-bold font-mono">NB</h2>
          </a>
          <ul className="hidden space-x-3 lg:flex justify-center items-center ">
            <li className="cursor-pointer ">
              <SearchPost />
            </li>
            {NavItems.map((item, index) => (
              <>
                <li className="flex justify-center items-center mt-2">
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`${
                      pathname === item.href
                        ? " text-black underline font-bold"
                        : " text-gray-800"
                    } flex items-center py-2 px-4 rounded-lg mb-2`}
                  >
                    <span>{item.title}</span>
                  </Link>
                </li>
              </>
            ))}

            <li className="cursor-pointer ">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className={cn("mt-5")}>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <Link href={`/user/write-post`}>
                    <DropdownMenuItem>Write Something</DropdownMenuItem>
                  </Link>
                  <DropdownMenuItem>Settigns</DropdownMenuItem>
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
          </ul>

          {/* <div className="items-center flex-shrink-0 hidden lg:flex gap-5">
            <Link
              href={"/login"}
              className="self-center px-8 py-3 font-semibold rounded border-2 text-gray-500"
            >
              Explore In
            </Link>
            <Link
              href={"/registration"}
              className="self-center px-8 py-3 font-semibold rounded bg-black text-gray-50"
            >
              Get Started
            </Link>
          </div> */}
          <div className="lg:hidden flex justify-center items-center gap-3 ">
            <SearchPost />
            <Sheet>
              <SheetTrigger asChild>
                <button className="p-4 lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6 text-gray-800"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </button>
              </SheetTrigger>
              <SheetContent className=" backdrop-blur-md">
                <SheetHeader>
                  <SheetTitle>
                    <p className="font-bold text-gray-500 text-3xl flex justify-center">
                      NEXT BLOG
                    </p>
                  </SheetTitle>
                  <Separator />
                  <SheetDescription>
                    <ul className=" mt-10 flex flex-col justify-center items-center">
                      {NavItems.map((item, index) => (
                        <>
                          <li className="text-3xl font-mono">
                            <Link
                              key={item.href}
                              href={item.href}
                              className={`${
                                pathname === item.href
                                  ? " text-black underline font-bold"
                                  : " text-gray-800"
                              } flex items-center py-2 px-4 rounded-lg mb-2`}
                            >
                              <span>{item.title}</span>
                            </Link>
                            <Separator />
                          </li>
                        </>
                      ))}
                      <li>
                        <div className="flex flex-col gap-5 mt-10">
                          <Link
                            href={"/login"}
                            className="self-center px-20 py-3 font-semibold rounded border-2 text-gray-500"
                          >
                            Sign in
                          </Link>
                          <Link
                            href={"/registration"}
                            className="self-center px-20 py-4 font-semibold rounded bg-black text-gray-50"
                          >
                            Sign up
                          </Link>
                        </div>
                      </li>
                    </ul>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
