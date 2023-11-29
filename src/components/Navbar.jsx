import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="w-screen h-[80px] bg-zinc-200 z-10 fixed drop-shadow-lg flex items-center justify-center flex-col">
      <div className="w-full h-full flex justify-between px-2 items-center max-w-[1200px]">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl uppercase pl-3">
            Brands.
          </h1>
          <ul className="hidden md:flex">
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>Platform</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <button className="py-2 px-5 bg-transparent text-black mr-4">
            Sign In
          </button>
          <button className="py-2 px-5">Sign Up</button>
        </div>
        <div className="flex md:hidden pr-5" onClick={handleClick}>
          {!click ? <MenuIcon className="w-9" /> : <XIcon className="w-9" />}
        </div>
      </div>

      <ul
        className={
          !click ? "hidden" : "absolute bg-zinc-200 w-full px-8 top-[80px]"
        }
      >
        <li className="border-b-2 border-zinc-300 w-full">Home</li>
        <li className="border-b-2 border-zinc-300 w-full">About</li>
        <li className="border-b-2 border-zinc-300 w-full">Support</li>
        <li className="border-b-2 border-zinc-300 w-full">Platform</li>
        <li className="border-b-2 border-zinc-300 w-full">Pricing</li>
        <div className="flex flex-col my-4">
          <button className="py-2 px-5 bg-transparent text-black mb-4">
            Sign In
          </button>
          <button className="py-2 px-5">Sign Up</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
