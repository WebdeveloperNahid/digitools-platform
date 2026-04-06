import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { IoMdCart } from "react-icons/io";

const Navbar = ({selectedProducts}) => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="mt-2 shadow-2xl">
      <div className="w-[83%] flex justify-between items-center mx-auto h-14 ">
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
          <a href="http://products" className="hover:bg-indigo-500 px-2 py-1 hover:text-white">Products</a>
          <a href="http://Features" className="hover:bg-indigo-500 px-2 py-1 hover:text-white">Features</a>
          <a href="http://Pricing" className="hover:bg-indigo-500 px-2 py-1 hover:text-white">Pricing</a>
          <a href="http://Testimonials" className="hover:bg-indigo-500 px-2 py-1 hover:text-white">Testimonials</a>
          <a href="http://FAQ" className="hover:bg-indigo-500 px-2 py-1 hover:text-white">FAQ</a>
        </span>

        <div className="flex justify-center items-center gap-2  ">
          <IoMdCart />
          <span className="bg-red-500 rounded-[50%]  px-[6px]  text-white   -ml-35 -mt-9  absolute hover:bg-indigo-500 px-2 py-1 hover:text-white ">{selectedProducts.length} </span>
          <h3 className="hover:bg-indigo-500 px-2 py-1 hover:text-white">Login</h3>
          <button className=" bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-2 px-3 rounded-3xl text-white hover:-translate-y-2 duration-500 cursor-pointer text-[10px] md:text-[17px]">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
