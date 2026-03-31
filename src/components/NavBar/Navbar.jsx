import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { IoMdCart } from "react-icons/io";

const Navbar = ({selectedProducts}) => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="mt-2 shadow-2xl">
      <div className="w-[83%] flex justify-between items-center mx-auto h-12 ">
        <div className="flex justify-center items-center gap-5 md:block  ">
          <span className="flex  " onClick={() => setOpen(!open)}>
            {open ? (
              <X className=" md:hidden"></X>
            ) : (
              <Menu className=" md:hidden"></Menu>
            )}

            <div className={`flex flex-col  ml-7 bg-indigo-500  py-1 md:hidden absolute duration-1000 ${open ? "top-12 " : "-top-40" }  `} >
              <a className="hover:bg-indigo-600 px-3 text-white " href="">
                Products
              </a>
              <a className=" hover:bg-indigo-600 px-3 text-white" href="">
                Features
              </a>
              <a className=" hover:bg-indigo-600 px-3 text-white" href="">
                Pricing
              </a>
              <a className=" hover:bg-indigo-600 px-3 text-white" href="">
                Testimonials
              </a>
              <a className=" hover:bg-indigo-600 px-3 text-white" href="">
                FAQ
              </a>
            </div>
          </span>

          <h1 className="font-semibold text-2xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent ">
            DigiTools
          </h1>
        </div>

        <span className="space-x-3 hidden md:block">
          <a href="http://products">Products</a>
          <a href="http://Features">Features</a>
          <a href="http://Pricing">Pricing</a>
          <a href="http://Testimonials">Testimonials</a>
          <a href="http://FAQ">FAQ</a>
        </span>

        <div className="flex justify-center items-center gap-2  ">
          <IoMdCart />
          <span className="bg-red-500 rounded-[50%]  px-[2px]  text-white -ml-35 -mt-7 absolute">{selectedProducts.length} </span>
          <h3>Login</h3>
          <button className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-2 px-3 rounded-3xl text-white ">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
