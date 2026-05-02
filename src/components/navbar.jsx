"use client";
import React, { useState } from "react";
import NavLink from "./navlink";
import { IoIosMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
const Navbar = () => {
  const [isShow, setIsShow] = useState(true);
  const { data: session, isPending } = authClient.useSession();
  //console.log(session, "session");
  const user = session?.user;
  //console.log(user, "Farid at qurabanihat!");
  return (
    <div>
      {/* Desktop Navbar */}
      <div className="hidden md:flex md:visible space-x-4 mx-auto items-center justify-around">
        <h2 className="font-bold text-2xl" >
          <span className="text-3xl text-orange-400">Q</span>urabani
          <span className="text-3xl text-pink-400">H</span>at
        </h2>
        
        <div>
          {isPending ? (
            <h2>Loading...</h2>
          ) : user ? (
            
            <div className="flex items-center space-x-2">
                {/* <NavLink className={'font-bold text-xl'} href="/">QurbaniAnimals</NavLink> */}
                <NavLink className="font-bold text-lg" href="/">
                    <span className="text-2xl text-orange-400">Q</span>urabani
                    <span className="text-2xl text-pink-400">A</span>nimals
                </NavLink>
                <NavLink className="font-bold text-yellow-400 text-[18px] btn" href="/user">{user.name}</NavLink>
                <button
                    onClick={async () => await authClient.signOut()}
                    className="btn btn-primary"
                >
                    <Link href="/login">Logout</Link>
                </button>
            </div>
          ) : (
            <div className="flex space-x-2">
                <NavLink className="font-bold text-lg" href="/">
                    <span className="text-2xl text-orange-400">Q</span>urabani
                    <span className="text-2xl text-pink-400">A</span>nimals
                </NavLink>
                <NavLink
                    className="border-1 w-fit px-2 rounded-md border-gray-200 font-bold text-green-600 text-lg"
                    href="/login"
                >
                    Login
                </NavLink>
                <NavLink
                    className="border-1 w-fit px-2 rounded-md border-gray-200 font-bold text-blue-600 text-lg"
                    href="/register"
                >
                    Register
                </NavLink>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="visible md:hidden">
        <div className="flex justify-between items-center  ">
          {/* QurabaniHat Text Logo */}
          <h2 className="font-bold text-lg">
            <span className="text-3xl text-orange-400">Q</span>urabani
            <span className="text-3xl text-pink-400">H</span>at
          </h2>
          <div onClick={() => setIsShow(!isShow)}>
            {isShow ? <IoIosMenu /> : <RxCross1 />}
          </div>
        </div>
        <div className="">
          {!isShow && (
            <div className="w-64 opacity-100 px-4 py-4 justify-start">
              {/* <div onClick={() => setIsShow(true)}>
                <NavLink className="py-1" href="/">
                  QurbaniAnimals
                </NavLink>
              </div> */}
              {isPending ? (
                <h2>Loading...</h2>
              ) : user ? (
                <div className="space-y-3 my-3">
                    <div
                        onClick={() => setIsShow(true)}
                    >
                        <NavLink className="font-bold text-lg" href="/">
                            <span className="text-2xl text-orange-400">Q</span>urabani
                            <span className="text-2xl text-pink-400">A</span>nimals
                        </NavLink>
                    </div>
                    
                    <div
                        className="btn"
                        onClick={() => setIsShow(true)}>
                        <NavLink className="font-bold text-yellow-400 text-[18px]" href="/user">{user.name}</NavLink>
                    </div>
                    
                    <button
                        onClick={async () => await authClient.signOut()}
                        className="btn btn-primary"
                    >
                        <Link href="/login">Logout</Link>
                    </button>
                </div>
              ) : (
                <div className="space-y-3 my-2">
                    <div
                        onClick={() => setIsShow(true)}
                    >
                        <NavLink className="font-bold text-lg" href="/">
                            <span className="text-2xl text-orange-400">Q</span>urabani
                            <span className="text-2xl text-pink-400">A</span>nimals
                        </NavLink>
                    </div>
                    <div
                        onClick={() => setIsShow(true)}
                        className="border-1 w-fit px-2 rounded-md border-gray-200 font-bold text-green-600 text-lg"
                    >
                        <NavLink href="/login">Login</NavLink>
                    </div>
                    <div
                        onClick={() => setIsShow(true)}
                        className="border-1 w-fit px-2 rounded-md border-gray-200 font-bold text-blue-600 text-lg"
                    >
                        <NavLink href="/register">Register</NavLink>
                    </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
