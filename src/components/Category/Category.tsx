import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import BlogsCard from "../Cards/BlogsCard/BlogsCard";

export default function Category() {
  return (
    <div className="mt-[60rem] lg:mt-[12rem] relative">
      <div className="flex gap-5 flex-col justify-center items-center">
        <h2 className="text-3xl lg:text-5xl font-bold">Browse By Category</h2>
        <p className="hidden lg:text-2xl font-bold">
          Selec the content which is more suitable for you !
        </p>
      </div>
      <div className="flex justify-center">
        <div className=" mt-5 lg:mt-10">
          <Tabs defaultValue="all" className={cn("w-full")}>
            <TabsList className={cn("flex flex-wrap gap-2 bg-none ")}>
              <TabsTrigger value="all">All(0)</TabsTrigger>
              <TabsTrigger value="health">Health(0)</TabsTrigger>
              <TabsTrigger value="lifestyle">LifeStyle(0)</TabsTrigger>
              <TabsTrigger value="travel">Travel(0)</TabsTrigger>
              <TabsTrigger value="technology">Technology(0)</TabsTrigger>
              <TabsTrigger value="culture">Culture(0)</TabsTrigger>
              <TabsTrigger value="religion">Religion(0)</TabsTrigger>
              <TabsTrigger value="politics">Politics(0)</TabsTrigger>
            </TabsList>
            <TabsContent className={cn("mt-40 lg:mt-0")} value="all">
              <div
                className={cn(
                  "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-11 gap-x-7.5  p-10"
                )}
              >
                <BlogsCard />
                <BlogsCard />
                <BlogsCard />
                <BlogsCard />
                <BlogsCard />
              </div>
            </TabsContent>
            <TabsContent className={cn("mt-40 lg:mt-0")} value="health">
              <div
                className={cn(
                  "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-11 gap-x-7.5  p-10"
                )}
              >
                <BlogsCard />
                <BlogsCard />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Button
          variant={"outline"}
          className={cn("py-6 px-10 hover:bg-black hover:text-white font-bold")}
        >
          Browse All Post
        </Button>
      </div>
    </div>
  );
}
