import BlogsCard from "@/components/Cards/BlogsCard/BlogsCard";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { Search, XCircle } from "lucide-react";
import React from "react";

const SearchPost = () => {
  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger asChild={true}>
          <Search />
        </AlertDialogTrigger>
        <AlertDialogContent className={cn("h-[80vh]")}>
          <AlertDialogHeader>
            <div className="flex justify-between">
              <AlertDialogTitle>Search Your Desire Post</AlertDialogTitle>
              <AlertDialogCancel className={cn("border-none")}>
                <XCircle />
              </AlertDialogCancel>
            </div>

            <AlertDialogDescription>
              <Input placeholder="search your post by post / author / category"></Input>
              <ScrollArea className="h-[65vh] w-full rounded-md border p-4 mt-5">
                <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center">
                  <BlogsCard />
                  <BlogsCard />
                  <BlogsCard />
                  <BlogsCard />
                  <BlogsCard />
                  <BlogsCard />
                  <BlogsCard />
                </div>
              </ScrollArea>
            </AlertDialogDescription>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default SearchPost;
