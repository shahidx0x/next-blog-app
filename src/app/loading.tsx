import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const loading = () => {
  return (
    <div>
      <Skeleton className="h-screen" />
    </div>
  );
};

export default loading;
