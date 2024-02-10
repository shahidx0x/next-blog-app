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

export default function Login() {
  return (
    <div className="flex justify-center h-screen items-center bg-gray-200/90 backdrop-blur-md">
      <Card className={cn("w-[420px]")}>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription> </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className=" flex flex-col gap-5">
            <Button
              variant={"outline"}
              className={cn("w-full p-6 hover:bg-black hover:text-white")}
            >
              <FaGoogle className="mr-2 h-5 w-5" /> Login with Google
            </Button>
            <Button
              variant={"outline"}
              className={cn("w-full p-6 hover:bg-black hover:text-white")}
            >
              <FaDiscord className="mr-2 h-5 w-5" /> Login with Discord
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
          </div>
          <Button className={cn("w-full p-6")}>
            <Mail className="mr-2 h-4 w-4" /> Login with Email
          </Button>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
}
