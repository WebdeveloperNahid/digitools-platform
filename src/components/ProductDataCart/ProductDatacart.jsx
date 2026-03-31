import { use } from "react";
import DataCart from "./DataCart";
import React, { useState } from 'react';
import SelectedCart from "../SelectedCart/SelectedCart";


const ProductDatacart = ({fetchPromise}) => {
    // console.log(fetchPromise)
    const productDatas = use(fetchPromise)
    // console.log("dlklsdfslkdfj", productDatas)
    const [products,setProducts] = useState("Products");
    return (
        <div className='space-y-5 text-center mt-20'>
            <h1 className='text-4xl font-bold  '>Premium Digital Tools</h1>
            <p className='text-[#615f5f]'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
            <div className='space-x-3 flex justify-center  '>
        
                <button 
                onClick={()=> setProducts("Products")}
                className={` ${products === "Products" ? "text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] " : " text-black font-semibold bg-gray-200" } px-5 py-3 rounded-3xl  font-semibold `}>Products</button>

                <button 
                onClick={()=> setProducts("cart")}
                className={` ${products === "cart" ? "text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] " : " text-black font-semibold bg-gray-200" } px-5 py-3 rounded-3xl  font-semibold `}>Cart (0) </button>
            </div>

            {
                products === "Products" ? <DataCart productDatas = {productDatas}></DataCart> : <SelectedCart></SelectedCart>
            }

        </div>
    );
};

export default ProductDatacart;