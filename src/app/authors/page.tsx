import AuthorsCard from "@/components/Cards/AuthorsCard/AuthorsCard";
import React from "react";

const AuthorPage = () => {
  return (
    <div className="mt-36 flex justify-center items-center flex-col">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col justify-center items-center gap-5">
          <h2 className="font-bold  text-5xl">Author Page</h2>
          <p className="font-medium">10 Authors</p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 p-6">
        <AuthorsCard />
        <AuthorsCard />
        <AuthorsCard />
        <AuthorsCard />
        <AuthorsCard />
        <AuthorsCard />
        <AuthorsCard />
        <AuthorsCard />
        <AuthorsCard />
      </div>
    </div>
  );
};

export default AuthorPage;
