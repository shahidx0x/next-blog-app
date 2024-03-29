"use client";
import { Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function Registration() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const onSubmit = async (data: any, event: any) => {
    event.preventDefault();
    const { email, password } = data;
    toast.promise(
      fetch(`/api/create-user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }),
      {
        loading: "Please wait...",
        success: (data) => {
          if (data.status === 409) throw new Error("User already exist");
          setTimeout(() => {
            router.push("/login");
          }, 2000);
          return "Registration Sucessfull please Login";
        },
        error: (error) => <b>Registration Failed : {error.message}</b>,
      },
      {
        success: {
          duration: 4000,
        },
      }
    );
  };
  return (
    <>
      <div className="relative">
        <Toaster position="top-center" reverseOrder={false} />
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
                  Sign up now and start your adventure!
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
                    <CardTitle>Registration</CardTitle>
                    <CardDescription>
                      Join with next generation bloging !
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <div className=" flex flex-col gap-5">
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
                      <div className="grid w-full  items-center gap-1.5">
                        <Label htmlFor="confirm-password">
                          Confirm Password
                        </Label>
                        <Input
                          type="password"
                          id="confirm-password"
                          placeholder="Confirm Password"
                          {...register("confirmPassword", {
                            required: true,
                            validate: (val: string) => {
                              if (watch("password") != val) {
                                return "Password doesn't match";
                              }
                            },
                          })}
                        />
                      </div>
                      {errors.confirmPassword?.message && (
                        <p className="text-red-500">
                          {errors.confirmPassword?.message.toString()}
                        </p>
                      )}
                    </div>
                    <Button type="submit" className={cn("w-full p-6")}>
                      <Mail className="mr-2 h-4 w-4" /> Registration with Email
                    </Button>
                  </CardContent>
                  <CardFooter>
                    <p className="text-center">
                      Already have an account ?{" "}
                      <Link href={"/login"}>
                        <span className="text-blue-500 underline cursor-pointer">
                          sign in{" "}
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
