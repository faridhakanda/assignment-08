'use client'
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Link from 'next/link';

const BookingAnimal = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()
    
    const handleBookingAnimal = (data) => {
        try {
            //console.log(data, "Form data for booking!");
            
            if (data) {
                reset();
                toast.success("user profile updated successfully!");
            } else {
                throw new Error("Something is wrong for booking!");
            }
        } catch(error) {
        
            toast.error(error.message);
            
        }
        
    }
    return (
        <div className="container mx-auto my-3 min-h-[80vh] bg-slate-100 flex justify-center items-center">
      <div className="p-4 mx-2 my-4 rounded-xl bg-white">
        <h2 className="font-bold text-3xl text-center mb-6">
          Booking Your Animal
        </h2>
        
        <form className="space-y-4" onSubmit={handleSubmit(handleBookingAnimal)}>
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
            <legend className="fieldset-legend">Email</legend>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Type here name"
              {...register("email", {
                required: "Email field is required"
              })}
            />
            {errors.email && (<p>{errors.email.message}</p>)}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Phone</legend>
            <input
              type="text"
              name="phone"
              className="input"
              placeholder="Type here photo url"
              {...register("phone", {
                required: "Phone number field is required"
              })}
            />
            {errors.phone && (<p>{errors.phone.message}</p>)}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Address</legend>
            <input
              type="text"
              name="address"
              className="input"
              placeholder="Type here photo url"
              {...register("address", {
                required: "Address field is required"
              })}
            />
            {errors.address && (<p>{errors.address.message}</p>)}
          </fieldset>
          
          
          
          <button type="submit" className="btn w-full bg-slate-800 text-white text-xl">
            Confirm your Booking
          </button>
        </form>
        <Link className='btn btn-primary mx-auto w-full my-2' href="/">Go to DashBoard</Link>
        
      </div>
    </div>
    );
};

export default BookingAnimal;