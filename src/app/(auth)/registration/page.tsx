import { BellRing, Check, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { FaDiscord, FaGoogle } from "react-icons/fa";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Registration() {
  return (
    <div className="flex justify-center h-screen items-center bg-gray-200/90 backdrop-blur-md">
      <Card className={cn("w-[420px]")}>
        <CardHeader>
          <CardTitle>Registration</CardTitle>
          <CardDescription>Join with next generation bloging !</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className=" flex flex-col gap-5">
            <Button
              variant={"outline"}
              className={cn("w-full p-6 hover:bg-black hover:text-white")}
            >
              <FaGoogle className="mr-2 h-5 w-5" /> Register with Google
            </Button>
            <Button
              variant={"outline"}
              className={cn("w-full p-6 hover:bg-black hover:text-white")}
            >
              <FaDiscord className="mr-2 h-5 w-5" /> Register with Discord
            </Button>
            <Separator />
            <div className="grid w-full  items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email" />
            </div>
            <div className="grid w-full  items-center gap-1.5">
              <Label htmlFor="password">Password</Label>
              <Input type="password" id="password" placeholder="Password" />
            </div>
            <div className="grid w-full  items-center gap-1.5">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input
                type="confirm-password"
                id="confirm-password"
                placeholder="Confirm Password"
              />
            </div>
          </div>
          <Button className={cn("w-full p-6")}>
            <Mail className="mr-2 h-4 w-4" /> Registration with Email
          </Button>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
}
