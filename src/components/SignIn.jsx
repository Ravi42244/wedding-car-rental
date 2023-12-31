"use client";
import Image from "next/image";
import Link from "next/link";
import {signIn} from "next-auth/react"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";



import { FcGoogle } from "react-icons/Fc";
import { FaFacebook } from "react-icons/Fa";


import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { signInFormValidationSchema } from "@/utils/form validations/Validation";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { redirect } from "next/navigation";



function SignInPage() {
  const form = useForm({
    resolver: zodResolver(signInFormValidationSchema),
    defaultValues: {
      mobileOremail: "",
      password: ""
    },
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  const handleSignInWithGoogle = async ()=>{
    signIn("google",{callbackUrl:"http://localhost:3000/cars"})

    

  }

  return (
    <>
      <div className="flex justify-center  md:relative drop-shadow-2xl container   h-[700px]">
        <div className="hidden md:flex md:rounded md:rounded-r-none md:border-none">
          <Image
            src="/sign-in-bg.jpg"
            fill={true}
            className="rounded object-cover pl-10"
          />
        </div>
        <Card className=" w-80 md:absolute  md:top-0 md:right-0 md:w-1/3 md:h-[700px] md:drop-shadow-2xl  md:flex md:flex-col md:border-none md:rounded md:rounded-l-none bg-white ">
          <CardHeader className=" flex justify-center items-center">
            <CardTitle className="mt-5">
              <span className="text-2xl ">Wedding Car Rental</span>
            </CardTitle>
            <CardContent className="w-full pt-10 border-b-[0.5px]">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <div className="mt-5 grid w-full items-center gap-4">
                    <div className=" flex flex-col space-y-10">
                      <FormField
                        control={form.control}
                        name="mobileOremail"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <div>
                                <Input
                                  name="mobileOremail"
                                  {...field}
                                  placeholder="Mobile or Email ID"
                                  className="border-none bg-slate-50 rounded focus:bg-white focus-visible:ring-transparent"
                                ></Input>
                                <FormMessage />
                              </div>
                            </FormControl>
                            
                            
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <div className=" flex flex-col pb-10">
                                <Input
                                  name="password"
                                  type="text"
                                  {...field}
                                  placeholder="Password"
                                  className="border-none bg-slate-50 rounded focus-visible:ring-transparent focus:bg-white"
                                />
<FormMessage />
                                <div className=" flex justify-between items-center mt-5">
                                  <Button
                                    type="submit"
                                    className=" px-5 md:px-10 flex justify-between items-center bg-yellow-400 hover:bg-yellow-500"
                                  >
                                    Sign In
                                  </Button>
                                  <Label
                                    htmlFor="name"
                                    className="font-thin text-xs mt-2 text-gray-400 cursor-pointer hover:text-gray-700"
                                  >
                                    <Link href="/password-reset">
                                      Forgot password?
                                    </Link>
                                  </Label>
                                </div>
                              </div>
                            </FormControl>

                            
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
               
                </form>
              </Form>
            </CardContent>
          </CardHeader>
          <div>
            <div className="-mt-9  mx-32 md:mx-52 flex justify-center rounded-full md:bg-white">
           
              or
            </div>
          </div>
          <CardContent className="md:absolute md:mt-[350px] w-full md:h-[350px] flex flex-col justify-center items-center space-y-5 font-ubuntu">
            <div className="w-full h-full flex justify-center items-center">
              <button onClick={()=>{handleSignInWithGoogle()
            redirect('/dashboard')  
            }


              }>
                <FcGoogle
                  size={50}
                  className="m-5 scale-100 hover:scale-150 hover:shadow-2xl"
                />
              </button>

              <button className="">
                <FaFacebook
                  size={45}
                  className="scale-100 hover:scale-150 hover:shadow-2xl"
                />
              </button>
            </div>
            <div className=" w-full flex items-end justify-center">
              New here?
              <Link
                href="/sign-up"
                className="pl-1 text-indigo-500 hover:text-indigo-700"
              >
                Sign Up
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default SignInPage;
