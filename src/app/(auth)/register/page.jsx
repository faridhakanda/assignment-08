"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

  const handleRegisterFunction = async(data) => {
    //console.log(data, "form data");
    
    const { data: res, error } = await authClient.signUp.email({
        name: data.name,
        email: data.email,
        password: data.password,
        photo: data.photo,
        callbackURL: '/login',

    });
    //console.log(res, error);
    if (error) {
        toast.error(error.message);
    }
    if (res) {
        toast.success("user registered successfully!");
    }



};
  const [isShowPassword, setIsShowPassword] = useState(false);
  return (
    <div className="container mx-auto my-3 min-h-[80vh] bg-slate-100 flex justify-center items-center">
      <div className="p-4 mx-2 my-4 rounded-xl bg-white">
        <h2 className="font-bold text-3xl text-center mb-6">
          Create your account
        </h2>
        
        <form className="space-y-4" onSubmit={handleSubmit(handleRegisterFunction)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Name</legend>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Type here name"
              {...register("name", {
                required: "Name field is required"
              })}
            />
            {errors.name && (<p>{errors.name.message}</p>)}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Photo Url</legend>
            <input
              type="text"
              name="photo"
              className="input"
              placeholder="Type here photo url"
              {...register("photo", {
                required: "Photo url field is required"
              })}
            />
            {errors.photo && (<p>{errors.photo.message}</p>)}
          </fieldset>
          
          
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
          <fieldset className="fieldset items-center relative">
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
          <button className="btn w-full bg-slate-800 text-white text-xl">Register</button>
        </form>
        <p className="my-4 text-center text-[#647489]">
          Already have an account?{" "}
          <Link className="text-blue-500" href={"/login"}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
