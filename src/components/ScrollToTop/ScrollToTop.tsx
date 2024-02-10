"use client";

import { scrollToTop } from "@/lib/utils";
import { ArrowUpToLine } from "lucide-react";
import React from "react";

const ScrollToTop = () => {
  return (
    <div>
      <div>
        <ArrowUpToLine onClick={scrollToTop} className="text-2xl" />
      </div>
    </div>
  );
};

export default ScrollToTop;
