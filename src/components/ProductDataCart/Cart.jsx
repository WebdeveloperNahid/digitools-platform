import React from "react";

const Cart = () => {
  return (
    <div className="card  bg-base-100 shadow-sm">
      <div className="card-body">
        <div className="flex justify-end">
          <button className="bg-green-500 w-30 rounded-3xl py-1 px-2 text-white ">
            Most Popular
          </button>
        </div>

        <span>img</span>

        <h2 className="text-3xl font-semibold">Premium</h2>
        <p className="text-[#888888] ">
          Access millions of royalty-free photos, videos, and graphics for your
          projects.
        </p>
        <span className="text-xl text-[#888888] flex items-center">
          <h1 className="font-bold text-[black] text-2xl">$29</h1>/mo
        </span>

        <ul className="mt-6 flex flex-col gap-2 text-xs">
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 me-2 inline-block text-success"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>High-resolution image generation</span>
          </li>
        </ul>
        <div className="mt-6">
          <button className="btn  bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white btn-block rounded-3xl py-5 ">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
