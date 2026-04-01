import React from "react";
import { toast } from "react-toastify";
import SelectedLastCart from "./SelectedLastCart";

const SelectedCart = ({ selectedProducts, setSelectedProducts, dolar, setDolar }) => {
  console.log("selectedProducts", selectedProducts);
  const handleRemoveAll = () => {
    setSelectedProducts([]);
    setDolar(0);
    toast.success("All products removed & checkout completed");
  }
  return (
    <div className=" py-10 w-[83%] mx-auto bg-white shadow-2xl">
      <h2 className="text-start w-[83%] mx-auto text-2xl font-bold mb-2">
        Your Cart
      </h2>

      {selectedProducts.length == 0 ? (
        <div className="my-5 mx-auto py-10 space-y-5">
          <h1 className="text-4xl font-bold mx-auto">NO Products Subscribed</h1>
          <p className="text-[#888888] font-bold">
            Go to Subscribe button & do subcrided
          </p>
        </div>
      ) : (
        selectedProducts.map((products, index) => {
          const handleDeleteSelectedProducts = (products) => {
            console.log("Delete", products);
            const filteredProducts = selectedProducts.filter(
              (selectedProduct) => selectedProduct.name !== products.name,
            );
            setSelectedProducts(filteredProducts);
            toast.warn(`${products.name} is deleteing`);
            // selectedProducts.length ==([])
          };

          return (
            <div className="my-5">
              <div>
                <div>
                  <SelectedLastCart
                    key={index}
                    products={products}
                    handleDeleteSelectedProducts={handleDeleteSelectedProducts}
                    dolar={dolar}
                    setDolar ={setDolar}
                  ></SelectedLastCart>
                </div>
              </div>
            </div>
          );
        })
      )}
      <div className="flex justify-between items-center w-[90%] mx-auto">
        <h2 className="text-start w-[83%] mx-auto text-2xl font-bold mt-2 mt-10 mb-2">
        Total
      </h2>
      <h2 className="mr-5 font-bold text-3xl text-green-500">{dolar}$</h2>
      </div>
      <button onClick={handleRemoveAll} className="btn  bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white w-[90%] mx-auto  py-6 rounded-3xl">
        Proceed To Checkout
      </button>
    </div>
  );
};

export default SelectedCart;
