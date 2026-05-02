

"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

const Login = () => {
    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

  const handleLogin = async (data) => {
    console.log(data, "form data");
    const { data: res, error} = await authClient.signIn.email({
        email: data.email,
        password: data.password,
        rememberMe: true,
        callbackURL: '/',
    });
    if (res) {
        toast.success('user login successfully!');
    }
    if (error) {
        toast.error('user not recognized!');
    }
    //console.log(res, error);
    // e.preventDefault();
    // const email = e.target.email.value;
    // const password = e.target.password.value;
    // console.log(email, password, "email and password");
  };
  
  const [isShowPassword, setIsShowPassword] = useState(false);
  return (
    <div className="container mx-auto my-3 min-h-[80vh] bg-slate-100 flex justify-center items-center">
      <div className="p-4 mx-2 rounded-xl bg-white my-2">
        <h2 className="font-bold text-3xl text-center mb-6">
          Login your account
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit(handleLogin)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email address</legend>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Type here email"
              {...register("email", {
                required: "Email field is required"
              })}
            />
            {errors.email && (<p>{errors.email.message}</p>)}
          </fieldset>
          <fieldset className="fieldset relative items-center">
            <legend className="fieldset-legend">Password</legend>
            <input
            
              
              type={isShowPassword ? "text" : "password"}
              name="password"
              className="input"
              placeholder="Your password"
              {...register("password", {
                required: "Password field is required"
              })}
             
              //onChange={() => e.target.value}
            />
            <span className="absolute right-2 cursor-pointer" onClick={() => setIsShowPassword(!isShowPassword)}>{isShowPassword ? <FaEye /> : <FaEyeSlash />}</span>
           
             {errors.password && (<p>{errors.password.message}</p>)}
          </fieldset>
          <button className="btn w-full bg-slate-800 text-white">Login</button>
        </form>
        <p className="my-4 text-center text-[#647489]">
          Don't have an account?{" "}
          <Link className="text-red-500" href={"/register"}>
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
