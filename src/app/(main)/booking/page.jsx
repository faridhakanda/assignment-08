'use client'


import Link from "next/link";
import { toast } from "react-toastify";

const BookingNow = () => {
    
    const handleBooking = () => {
        toast.success('The Animal is Booking successfully!');
    }
    return (
        <div className="mx-auto px-2 py-2 flex  my-2 justify-center min-h-[50vh] ">
            <button className="mx-auto rounded-md container bg-purple-50 justify-center items-center" onClick={handleBooking}>
                <Link className="mx-auto btn btn-primary justify-center my-auto" href="/">Confirm Booking</Link>
            </button>
        </div>
    )
}

export default BookingNow;