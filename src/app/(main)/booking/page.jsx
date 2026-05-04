'use client'


import { getAnimalDetails } from "@/lib/data";
import Link from "next/link";
import { toast } from "react-toastify";

const BookingNow = () => {
   
    const handleBooking = (e) => {
        e.preventDefault();
        const name = e.target.name;
        if (!name.trim()) {
            alert('Name not to be empty string!');
        }
        toast.success('The Animal is Booking successfully!');
    }
    return (
        <div className="mx-auto px-2 py-2 flex  my-2 justify-center min-h-[50vh] ">
            <form onClick={handleBooking}>
                <input 
                    name='name'
                    type='text'
                    
                    placeholder="enter your name"
                    required
                    onChange={() => e.target.value}
                />
                <button>
                    <Link href='/'>Submit</Link>
                </button>
            </form>
            
            {/* <button className="mx-auto rounded-md container bg-purple-50 justify-center items-center" onClick={handleBooking}>
                <Link className="mx-auto btn btn-primary justify-center my-auto" href="/">Confirm Booking</Link>
            </button> */}
        </div>
    )
}

export default BookingNow;