import React from "react";
import Cart from "./Cart";

const DataCart = ({ productDatas, selectedProducts, setSelectedProducts, dolar, setDolar }) => {
  console.log("productDatas==", productDatas);
  return (
    <div className="w-[83%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 items-stretch">
      {productDatas.map((productData, id) => {
        console.log("productData --", productData);
        return (
          
          <Cart key={id} productData ={productData} selectedProducts={selectedProducts } setSelectedProducts={setSelectedProducts} dolar={dolar} setDolar ={setDolar} ></Cart>
      
        );
      })}
    </div>
  );
};

export default DataCart;
