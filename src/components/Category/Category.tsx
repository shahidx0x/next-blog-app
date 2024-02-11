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
    <div className="mt-[60rem] md:mt-[90rem] lg:mt-[16rem] relative">
      <div className="flex gap-5 flex-col justify-center items-center">
        <h2 className="text-3xl lg:text-5xl font-bold">Browse By Category</h2>
        <p className="hidden lg:text-2xl font-bold">
          Selec the content which is more suitable for you !
        </p>
      </div>
      <div className="flex justify-center">
        <div className=" mt-5 lg:mt-10">
          <Tabs defaultValue="all" className={cn("")}>
            <div className="flex justify-center">
              <div className=" w-full md:w-[60%] lg:w-[80%]">
                <TabsList className={cn("flex flex-wrap gap-2 bg-none h-full")}>
                  <TabsTrigger
                    className={cn(
                      "bg-gradient-to-r from-black to-black bg-[length:0px_100px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_100px] group-hover:bg-[length:100%_100px] hover:text-white"
                    )}
                    value="all"
                  >
                    All(0)
                  </TabsTrigger>
                  <TabsTrigger
                    className={cn(
                      "bg-gradient-to-r from-black to-black bg-[length:0px_100px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_100px] group-hover:bg-[length:100%_100px] hover:text-white"
                    )}
                    value="health"
                  >
                    Health(0)
                  </TabsTrigger>
                  <TabsTrigger
                    className={cn(
                      "bg-gradient-to-r from-black to-black bg-[length:0px_100px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_100px] group-hover:bg-[length:100%_100px] hover:text-white"
                    )}
                    value="lifestyle"
                  >
                    LifeStyle(0)
                  </TabsTrigger>
                  <TabsTrigger
                    className={cn(
                      "bg-gradient-to-r from-black to-black bg-[length:0px_100px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_100px] group-hover:bg-[length:100%_100px] hover:text-white"
                    )}
                    value="travel"
                  >
                    Travel(0)
                  </TabsTrigger>
                  <TabsTrigger
                    className={cn(
                      "bg-gradient-to-r from-black to-black bg-[length:0px_100px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_100px] group-hover:bg-[length:100%_100px] hover:text-white"
                    )}
                    value="technology"
                  >
                    Technology(0)
                  </TabsTrigger>
                  <TabsTrigger
                    className={cn(
                      "bg-gradient-to-r from-black to-black bg-[length:0px_100px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_100px] group-hover:bg-[length:100%_100px] hover:text-white"
                    )}
                    value="culture"
                  >
                    Culture(0)
                  </TabsTrigger>
                  <TabsTrigger
                    className={cn(
                      "bg-gradient-to-r from-black to-black bg-[length:0px_100px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_100px] group-hover:bg-[length:100%_100px] hover:text-white"
                    )}
                    value="religion"
                  >
                    Religion(0)
                  </TabsTrigger>
                  <TabsTrigger
                    className={cn(
                      "bg-gradient-to-r from-black to-black bg-[length:0px_100px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_100px] group-hover:bg-[length:100%_100px] hover:text-white"
                    )}
                    value="politics"
                  >
                    Politics(0)
                  </TabsTrigger>
                </TabsList>
              </div>
            </div>
            <div className="flex justify-center">
              <TabsContent className={cn("p-0 lg:p-10")} value="all">
                <div
                  className={cn(
                    "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-0  lg:p-10"
                  )}
                >
                  <BlogsCard />
                  <BlogsCard />
                  <BlogsCard />
                  <BlogsCard />
                  <BlogsCard />
                </div>
              </TabsContent>
              <TabsContent
                className={cn("mt-64  lg:mt-0 p-0 lg:p-10")}
                value="health"
              >
                <div
                  className={cn(
                    "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-0  lg:p-10"
                  )}
                >
                  <BlogsCard />
                  <BlogsCard />
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Button
          variant={"outline"}
          className={cn(
            "bg-gradient-to-r from-black to-black bg-[length:0px_100px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_100px] group-hover:bg-[length:100%_100px] hover:text-white"
          )}
        >
          Browse All Post
        </Button>
      </div>
    </div>
  );
}
