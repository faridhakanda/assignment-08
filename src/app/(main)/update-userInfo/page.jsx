'use client'
import React from 'react';
import { useForm } from 'react-hook-form';
import { authClient } from '@/lib/auth-client';
import { toast } from 'react-toastify';
import Link from 'next/link';

const UserProfileUpdate = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const handleUserProfileUpdate = async(data) => {
        console.log(data, 'user profile update!');
        const { data: res, error } = await authClient.updateUser({
            photo: data.photo,
            name: data.name,
            callbackURL: '/',
        });
        console.log(res, error);
        if (error) {
            toast.error(error.message);
        }
        if (res) {
            toast.success("user profile updated successfully!");
        }
    }
    return (
        <div className="container mx-auto my-3 min-h-[80vh] bg-slate-100 flex justify-center items-center">
      <div className="p-4 mx-2 my-4 rounded-xl bg-white">
        <h2 className="font-bold text-3xl text-center mb-6">
          Update your Profile
        </h2>
        
        <form className="space-y-4" onSubmit={handleSubmit(handleUserProfileUpdate)}>
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
          
          
          
          
          <button className="btn w-full bg-slate-800 text-white text-xl">
            Update
          </button>
        </form>
        <Link className='btn btn-primary mx-auto w-full my-2' href="/">Go to DashBoard</Link>
        
      </div>
    </div>
    );
};

export default UserProfileUpdate;