"use client";
import { Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { FaDiscord, FaGoogle } from "react-icons/fa";
import { signIn, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Toaster, toast } from "react-hot-toast";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useForm } from "react-hook-form";

export default function Login() {
  const { data, status } = useSession();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data: any, event: any) => {
    event.preventDefault();

    toast.promise(signIn("credentials", { ...data, redirect: false }), {
      loading: "Saving...",
      success: <b>Settings saved!</b>,
      error: <b>Could not save.</b>,
    });
  };
  const handleGoogle = () => {
    signIn("google", {
      callbackUrl: "/",
    });
  };
  const handleDiscord = () => {
    signIn("discord", {
      callbackUrl: "/",
    });
  };

  return (
    <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      <Toaster position="bottom-left" reverseOrder={false} />
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex justify-center items-center border border-green-300 backdrop-blur-md mt-16"
      >
        <Card className={cn("w-[420px]")}>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription> </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className=" flex flex-col gap-5">
              <Button
                onClick={() => handleGoogle()}
                variant={"outline"}
                className={cn("w-full p-6 hover:bg-black hover:text-white")}
              >
                <FaGoogle className="mr-2 h-5 w-5" /> Login with Google
              </Button>
              <Button
                onClick={() => handleDiscord()}
                variant={"outline"}
                className={cn("w-full p-6 hover:bg-black hover:text-white")}
              >
                <FaDiscord className="mr-2 h-5 w-5" /> Login with Discord
              </Button>
              <Separator />
              <div className="grid w-full  items-center gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Email"
                  {...register("email", { required: true })}
                />
              </div>
              <div className="grid w-full  items-center gap-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  placeholder="Password"
                  {...register("password", { required: true })}
                />
              </div>
            </div>
            <Button className={cn("w-full p-6")}>
              <Mail className="mr-2 h-4 w-4" /> Login with Email
            </Button>
          </CardContent>
        </Card>
      </form>
    </div>
  );
}
