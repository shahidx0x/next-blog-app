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
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useForm } from "react-hook-form";
import Link from "next/link";

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
    <>
      <div className="relative">
        <img
          src="https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <div className="relative bg-gray-900 bg-opacity-75">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between xl:flex-row">
              <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                <h2 className="max-w-lg text-center md:text-left mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                  Sign in now and start your adventure!
                </h2>
                <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
                  Start your journey with us and unlock a treasure trove of
                  engaging content. Sign up now and let the adventure begin!
                </p>
                <a
                  href="/"
                  aria-label=""
                  className="text-blue-200 flex justify-center md:justify-start"
                >
                  Learn more
                  <svg
                    className="inline-block w-3 ml-2"
                    fill="currentColor"
                    viewBox="0 0 12 12"
                  >
                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                  </svg>
                </a>
              </div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex items-center "
              >
                <Card className={cn("w-[25rem] rounded-md")}>
                  <CardHeader>
                    <CardTitle>Login</CardTitle>
                    <CardDescription> </CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <div className=" flex flex-col gap-5">
                      <Button
                        onClick={() => handleGoogle()}
                        variant={"outline"}
                        className={cn(
                          "w-full p-6 hover:bg-black hover:text-white"
                        )}
                      >
                        <FaGoogle className="mr-2 h-5 w-5" /> Login with Google
                      </Button>
                      <Button
                        onClick={() => handleDiscord()}
                        variant={"outline"}
                        className={cn(
                          "w-full p-6 hover:bg-black hover:text-white"
                        )}
                      >
                        <FaDiscord className="mr-2 h-5 w-5" /> Login with
                        Discord
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

                  <CardFooter>
                    <p className="text-center">
                      Dont have an account ?{" "}
                      <Link href={"/registration"}>
                        <span className="text-blue-500 underline cursor-pointer">
                          sign up{" "}
                        </span>
                      </Link>
                    </p>
                  </CardFooter>
                </Card>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

{
  /* <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
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
</div> */
}