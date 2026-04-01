import React, { useState } from "react";
import { toast } from "react-toastify";

const Cart = ({ productData, selectedProducts, setSelectedProducts, dolar, setDolar }) => {
  const [isSubscribe, setIsSubscribe] = useState(false);

  const handleSubscribe = () => {
    toast.success(`${productData.name} is Subscribed`)
    setIsSubscribe(true);
    setSelectedProducts([...selectedProducts,productData]);
    setDolar(dolar + productData.price)
  };


  return (
    <div>
      <div className="  flex flex-col h-full hover:-translate-y-2 duration-300">
        <div className="card  bg-base-100 shadow-sm flex-1 flex flex-col">
          <div className="card-body  flex-1 justify-between">
            <div className="flex  justify-end">
              <button
                className={` rounded-3xl py-1 px-3 text-white ${
                  productData.tag === "New"
                    ? "bg-sky-500"
                    : productData.tag === "Best Seller"
                      ? "bg-green-500"
                      : productData.tag === "Popular"
                        ? "bg-amber-700"
                        : "bg-gray-400"
                }`}
              >
                {productData.tag}
              </button>
            </div>

            <span>
              <img src={productData.icon} alt="" />
            </span>

            <h2 className="text-3xl font-semibold">{productData.name} </h2>
            <p className="text-[#888888] ">{productData.description}</p>
            <span className="text-xl text-[#888888] flex items-center">
              <h1 className="font-bold text-[black] text-2xl">
                {productData.price}
              </h1>{" "}
              /{productData.period}
            </span>

            <ul className="mt-6 flex flex-col gap-2 text-xs text-[#888888]">
              {productData.features.map((feature, index) => (
                <li key={index} className="flex items-center">
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
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <button
                onClick={handleSubscribe}
                disabled = {isSubscribe ? true : false}
                
                className= {`btn   text-white btn-block rounded-3xl py-5 ${isSubscribe ? "bg-green-500 ":"bg-linear-to-r from-[#4F39F6] to-[#9514FA]"}`}
              >
                {isSubscribe ? "Subscribed " : "Subscribe "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
