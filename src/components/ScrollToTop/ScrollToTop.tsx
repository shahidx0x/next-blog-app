"use client";

import { scrollToTop } from "@/lib/utils";
import { ArrowUpToLine } from "lucide-react";
import React from "react";

const ScrollToTop = () => {
  return (
    <div>
      <div>
        <div className="fixed bg-black text-white bottom-0 right-2 lg:bottom-5 lg:right-5 p-4 lg:p-2 lg:hover:bg-black lg:hover:text-white border-black border rounded-full">
          <ArrowUpToLine onClick={scrollToTop} className="text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default ScrollToTop;
